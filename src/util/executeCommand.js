import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export const executeCommand = async (command) => {
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    return stdout;
  } catch (error) {
    console.error(`실행 중 오류 발생: ${error}`);
    throw error;
  }
};
