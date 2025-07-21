import { exec } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { getCurrentDate } from './utils';

export const getFolderPath = (): string => {
  const nasPath = `\\\\${process.env.NAS_IP}\\Paprika_3TB\\5_Personal\\김준`;
  return nasPath;
};

export const runBatFile = (): void => {
  const desktopPath = path.join(os.homedir(), 'Desktop', 'test.bat');

  exec(
    `start cmd /c ${desktopPath}`,
    (
      error: Error | null,
      stdout: string | Buffer,
      stderr: string | Buffer,
    ): void => {
      if (error) {
        console.error(error);
        return;
      }
      if (stdout) {
        console.log('stdout:', stdout.toString());
      }
      if (stderr) {
        console.error('stderr:', stderr.toString());
      }
    },
  );
};

export const initializeFile = (
  flag: boolean,
  id: number,
  name: string,
  header: string,
) => {
  if (!flag) return;
  try {
    const folderPath = getFolderPath() + `\\${getCurrentDate()}`;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeStamp = `${hours}-${minutes}-${seconds}`;

    const filePath = path.join(
      folderPath,
      `${id.toString()}_${
        name && name.trim() != '' ? name + '_' : ''
      }${timeStamp}.csv`,
    );

    console.log(filePath)
    return;

    let writeStream: fs.WriteStream | null = null;
    writeStream = fs.createWriteStream(filePath, { flags: 'a' });

    // this.writeStream.write('timestamp,value1,value2\n'); // 헤더 추가
    writeStream.write(header + '\n'); // 헤더 추가
  } catch (error) {
    console.error(error);
  }
};
