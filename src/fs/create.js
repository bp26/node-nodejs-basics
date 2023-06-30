import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');
const data = 'I am fresh and young';

const checkFile = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const create = async () => {
  const fileExists = await checkFile(filePath);
  if (fileExists) {
    throw new Error('FS operation failed');
  } else {
    await fs.writeFile(filePath, data);
  }
};

await create();
