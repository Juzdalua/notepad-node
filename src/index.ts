import { getFolderPath, initializeFile } from '@/utils/utils';
import 'dotenv/config';

getFolderPath();
initializeFile(false, 1, 'timemachine', 'id,name,age');
