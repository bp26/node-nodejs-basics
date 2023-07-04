import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirpath = path.join(__dirname, 'files');

const list = async () => {
  try {
    const files = await fs.readdir(dirpath);
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
