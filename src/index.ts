import 'dotenv/config';
import { SIOServer } from './server/socket';
import { getFolderPath, initializeFile, runBarFile } from './utils/file.utils';

// const sioServer = new SIOServer();
// sioServer.Start();

// setInterval(() => {
//   sioServer.SendClientInfoToWebClient();
// }, 1000);

getFolderPath();
initializeFile(false, 1, 'timemachine', 'id,name,age');
// runBarFile();
