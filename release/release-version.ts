import { exec } from "child_process";
import manifest from "../manifest.json";

const version = manifest.version;
const releaseName = `v${version}-beta`;
const commitName = `release ${releaseName}`;

betterExec(`git restore --staged .`)
  .then(() => betterExec(`git add manifest.json README.md`))
  .then(() => betterExec(`git commit -m "${commitName}"`))
  .then(() => betterExec(`git tag "${releaseName}"`))
  .then(() => betterExec(`git push origin`))
  .then(() => betterExec(`git push origin "${releaseName}"`));

async function betterExec(command: string): Promise<void> {
  console.log(`command: ${command}`);
  return new Promise<void>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      if (error) {
        console.error(`exec error: ${error}`);
        return reject();
      }
      resolve();
    });
  });
}
