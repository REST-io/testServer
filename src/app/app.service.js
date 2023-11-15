import { executeCommand } from "../util/executeCommand.js";
import { getAbsolutePath } from "../util/path.js";

export const executeDeploymentScripts = async (req, res) => {
  try {
    const path = getAbsolutePath("../shell/tmp.sh");
    const { codeName, argument, node } = req.body;

    const argumentLine = argument
      .reduce((acc, curr) => {
        return acc + `-a ${curr} `;
      }, "")
      .trim();

    const command = `bash "${path}" ${codeName} "${argumentLine}" ${node}`;
    await executeCommand(command); // bash 스크립트를 직접 실행합니다.

    res.status(201).json({ message: "배포 스크립트 실행 완료" });
  } catch (error) {
    console.error(error); // 에러 로깅
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
