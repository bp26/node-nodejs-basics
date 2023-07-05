import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  pipeline(createReadStream(filepath), stdout, (err) => {
    console.log(err.stack);
  });
};

await read();
