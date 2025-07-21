import 'dotenv/config';
import { SIOServer } from './server/socket';
import { getFolderPath, initializeFile, runBatFile } from './utils/file.utils';
import { getKSTTimestamp } from './utils/utils';

// const sioServer = new SIOServer();
// sioServer.Start();

// setInterval(() => {
//   sioServer.SendClientInfoToWebClient();
// }, 1000);

const a = new Date().getTime();
const b = getKSTTimestamp(a);
const c = new Date(a);
const d = `${c.getFullYear()}-${String(c.getMonth() + 1).padStart(2, '0')}-${String(c.getDate()).padStart(2, '0')} ${String(c.getHours()).padStart(2, '0')}:${String(c.getMinutes()).padStart(
  2,
  '0'
)}:${String(c.getSeconds()).padStart(2, '0')}`;
console.log(a.toString());
console.log(b);
console.log(d);
console.log(b == d);

// console.log(getFolderPath());
// initializeFile(true, 1, 'timemachine', 'id,name,age');
// runBarFile();
