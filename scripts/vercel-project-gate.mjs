const allowedProjectIds = new Set([
  "prj_d3SGYK8qE511dqZRfX83WjOX9b58",
  "prj_JGsqhWRE1adFRKT7o4I9Sr2kNe0Y",
]);

const projectId = process.env.VERCEL_PROJECT_ID || "";

if (allowedProjectIds.has(projectId)) {
  console.log(`Building approved Flavor Factory Vercel project: ${projectId}`);
  process.exit(1);
}

console.log(`Ignoring duplicate Flavor Factory Vercel project: ${projectId || "unknown"}`);
process.exit(0);
