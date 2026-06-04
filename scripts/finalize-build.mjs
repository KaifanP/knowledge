import { copyFile, stat } from "node:fs/promises";
import { join } from "node:path";

const distApp = join("dist", "app.html");
const distIndex = join("dist", "index.html");

try {
  await stat(distApp);
  await copyFile(distApp, distIndex);
} catch (error) {
  if (error.code !== "ENOENT") {
    throw error;
  }
}
