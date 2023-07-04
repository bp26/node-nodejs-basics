import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilepath = path.join(__dirname, 'files', 'properFilename.md');

const checkFile = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const rename = async () => {
  try {
    const alreadyExists = await checkFile(newFilepath);
    if (alreadyExists) {
      throw new Error();
    } else {
      await fs.rename(filepath, newFilepath);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
