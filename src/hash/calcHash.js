import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const file = await fs.readFile(filepath);
  const hash = crypto.createHash('sha256');
  hash.update(file);
  const hex = hash.digest('hex');
  console.log(hex);
};

await calculateHash();
