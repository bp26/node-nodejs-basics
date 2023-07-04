import { fstat } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'files');
const newDir = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.mkdir(newDir);
    const files = await fs.readdir(dir);
    for (const file of files) {
      const filepath = path.join(dir, file);
      const newFilepath = path.join(newDir, file)
      await fs.copyFile(filepath, newFilepath);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};
await copy();
