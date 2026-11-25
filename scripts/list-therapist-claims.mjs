import { therapistClaimsClient } from "./therapist-claims-client.mjs";

try {
  const client = therapistClaimsClient();
  const pageSize = 100;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await client.from("therapist_claims")
      .select("reference,slug,work_email,license_match,created_at")
      .eq("status", "pending").order("license_match", { ascending: false })
      .order("created_at").order("reference").range(offset, offset + pageSize - 1);
    if (error) throw new Error("Pending claims could not be loaded.");
    if (data.length) console.table(data);
    if (data.length < pageSize) break;
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
