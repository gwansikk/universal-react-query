import { loadModule, switchVersion } from "./utils.mjs";

const reactQueryPackageJson = loadModule("@tanstack/react-query/package.json");

if (!reactQueryPackageJson || typeof reactQueryPackageJson.version !== "string") {
  console.warn("@tanstack/react-query is not found.");
} else if (reactQueryPackageJson.version.startsWith("4.")) {
  switchVersion(4);
} else if (reactQueryPackageJson.version.startsWith("5.")) {
  switchVersion(5);
} else {
  console.warn("[@suspensive/react-query]", `version v${version} is not supported.`);
}
