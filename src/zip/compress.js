import zlib from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, 'files', 'fileToCompress.txt');
const tranformedFilepath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  pipeline(
    createReadStream(filepath),
    zlib.createGzip(),
    createWriteStream(tranformedFilepath),
    (err) => {
      if (err) {
        console.log(err.stack);
      }
    }
  );
};

await compress();
