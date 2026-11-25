import { parseArgs } from "node:util";
import { therapistClaimsClient } from "./therapist-claims-client.mjs";

try {
  const { values } = parseArgs({ options: { reference: { type: "string" }, reject: { type: "boolean" } } });
  if (!/^MCT-T-[0-9A-F]{8}(?:-[0-9A-F]{4}){3}-[0-9A-F]{12}$/.test(values.reference ?? "")) {
    throw new Error("Provide a claim reference with --reference MCT-T-… and optionally --reject.");
  }
  const client = therapistClaimsClient();
  const { data, error } = await client.rpc("decide_therapist_claim", {
    claim_reference: values.reference,
    reject_claim: Boolean(values.reject),
  });
  if (error || !["approved", "rejected"].includes(data)) {
    throw new Error(`Claim decision failed (${error ? "database error" : data}).`);
  }
  console.log(`${values.reference}: ${data}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
