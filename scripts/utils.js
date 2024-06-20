/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dir = path.resolve(__dirname, "..", "dist");

export function loadModule(name) {
  try {
    const src = path.join(__dirname, "..", "node_modules", name, "package.json");
    console.log(src);
    return JSON.parse(fs.readFileSync(src, "utf-8"));
  } catch (e) {
    return undefined;
  }
}

export function switchVersion(version) {
  copy(version);
  console.log("[@suspensive/react-query]", `set version to v${version}: @tanstack/react-query@${version}`);
}

function copy(version) {
  const srcDir = path.join(dir, `v${version}`);
  const files = fs.readdirSync(srcDir);

  files.forEach((file) => {
    const src = path.join(srcDir, file);
    const dest = path.join(dir, file);
    const content = fs.readFileSync(src, "utf-8");

    try {
      fs.unlinkSync(dest);
    } catch (error) {
      /* empty */
    }
    fs.writeFileSync(dest, content, "utf-8");
  });
}
