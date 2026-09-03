import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

async function loadStorageModule() {
  const source = await readFile(
    new URL("../src/lib/safetyPlanStorage.ts", import.meta.url),
    "utf8",
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

function completeFixture(defaultSafetyPlan) {
  const plan = defaultSafetyPlan();
  return {
    ...plan,
    warningSigns: ["Fictional sign 1", "Fictional sign 2", "Fictional sign 3"],
    copingStrategies: ["Fictional strategy 1", "Fictional strategy 2", "Fictional strategy 3"],
    distractionPeople: Array.from({ length: 3 }, (_, index) => ({
      name: `Fictional distraction contact ${index + 1}`,
      phone: `555-010${index}`,
    })),
    helpPeople: Array.from({ length: 3 }, (_, index) => ({
      name: `Fictional support contact ${index + 1}`,
      phone: `555-020${index}`,
    })),
  };
}

test("only the exact former built-in Veterans contact migrates, once", async () => {
  const { defaultSafetyPlan, loadStoredSafetyPlan } = await loadStorageModule();
  const fixture = completeFixture(defaultSafetyPlan);
  fixture.professionals[2] = {
    name: "Veterans Crisis Line",
    phone: "1-800-273-8255 (Press 1)",
  };

  const firstLoad = loadStoredSafetyPlan(() => JSON.stringify(fixture));
  assert.equal(firstLoad.recovered, false);
  assert.equal(firstLoad.veteransContactMigrated, true);
  assert.deepEqual(firstLoad.plan.professionals[2], {
    name: "Veterans Crisis Line",
    phone: "Dial 988, then Press 1; or text 838255",
  });

  const secondLoad = loadStoredSafetyPlan(() => JSON.stringify(firstLoad.plan));
  assert.equal(secondLoad.veteransContactMigrated, false);
  assert.deepEqual(secondLoad.plan, firstLoad.plan);
});

test("similar or customized Veterans contacts remain unchanged", async () => {
  const { defaultSafetyPlan, normalizeStoredSafetyPlan } = await loadStorageModule();
  const fixture = completeFixture(defaultSafetyPlan);
  const customContacts = [
    { name: "Veterans Crisis Line - local note", phone: "1-800-273-8255 (Press 1)" },
    { name: "Veterans Crisis Line", phone: "Fictional custom number" },
  ];
  fixture.professionals = [...fixture.professionals, ...customContacts];

  const result = normalizeStoredSafetyPlan(fixture);
  assert.equal(result.veteransContactMigrated, false);
  assert.deepEqual(result.plan.professionals.slice(-2), customContacts);
});

test("more than 50 valid entries survive load and JSON save", async () => {
  const { defaultSafetyPlan, loadStoredSafetyPlan } = await loadStorageModule();
  const fixture = completeFixture(defaultSafetyPlan);
  const strings = Array.from({ length: 57 }, (_, index) => `Fictional item ${index + 1}`);
  const contacts = Array.from({ length: 61 }, (_, index) => ({
    name: `Fictional contact ${index + 1}`,
    phone: `555-${String(index).padStart(4, "0")}`,
  }));
  fixture.warningSigns = [...strings];
  fixture.copingStrategies = [...strings];
  fixture.distractionPeople = [...contacts];
  fixture.helpPeople = [...contacts];
  fixture.professionals = [...contacts];
  fixture.environmentSteps = [...strings];

  const loaded = loadStoredSafetyPlan(() => JSON.stringify(fixture));
  assert.equal(loaded.recovered, false);
  assert.deepEqual(loaded.plan, fixture);
  assert.deepEqual(JSON.parse(JSON.stringify(loaded.plan)), fixture);
});

test("malformed storage recovers safely without showing a migration", async () => {
  const { loadStoredSafetyPlan } = await loadStorageModule();
  const malformedJson = loadStoredSafetyPlan(() => "{not-json");
  assert.equal(malformedJson.recovered, true);
  assert.equal(malformedJson.veteransContactMigrated, false);
  assert.equal(malformedJson.plan.warningSigns.length, 3);

  const malformedShape = loadStoredSafetyPlan(() => JSON.stringify({ warningSigns: [null] }));
  assert.equal(malformedShape.recovered, true);
  assert.equal(malformedShape.veteransContactMigrated, false);
  assert.deepEqual(malformedShape.plan.warningSigns, ["", "", ""]);
});

test("denied storage and destructive-reset cancellation fail safely", async () => {
  const { clearStoredSafetyPlan, loadStoredSafetyPlan } = await loadStorageModule();
  const deniedLoad = loadStoredSafetyPlan(() => {
    throw new Error("synthetic storage denial");
  });
  assert.equal(deniedLoad.storageAvailable, false);
  assert.equal(deniedLoad.recovered, false);

  let removals = 0;
  const cancelled = clearStoredSafetyPlan(false, () => { removals += 1; });
  assert.deepEqual(cancelled, { cleared: false, storageAvailable: true });
  assert.equal(removals, 0);

  const deniedRemoval = clearStoredSafetyPlan(true, () => {
    throw new Error("synthetic storage denial");
  });
  assert.deepEqual(deniedRemoval, { cleared: true, storageAvailable: false });
});

test("the one-time migration notice is an accessible status separate from recovery", async () => {
  const client = await readFile(
    new URL("../src/app/safety-plan/SafetyPlanClient.tsx", import.meta.url),
    "utf8",
  );
  assert.match(client, /veteransContactMigrationNotice/);
  assert.match(client, /role="status"/);
  assert.match(client, /aria-live="polite"/);
  assert.match(client, /Veterans Crisis Line contact updated/);
  assert.match(client, /Your other saved contacts were left unchanged/);
  assert.match(client, /storageRecoveryWarning[\s\S]*role="alert"/);
});
