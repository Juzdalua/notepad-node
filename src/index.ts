import { getFolderPath, initializeFile } from '@/utils/utils';
import 'dotenv/config';
import { SIOServer } from './server/socket';

getFolderPath();
initializeFile(false, 1, 'timemachine', 'id,name,age');

// const sioServer = new SIOServer();
// sioServer.Start();

// setInterval(() => {
//   sioServer.SendClientInfoToWebClient();
// }, 1000);
