import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  pipeline(stdin, createWriteStream(filepath), (err) => {
    console.log(err.stack);
  });
};

await write();
