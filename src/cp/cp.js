import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(childPath, [...args], { stdio: 'pipe' });
  pipeline(process.stdin, child.stdin, (err) => {
    if (err) {
      console.log(err.stack);
    }
  });
};

spawnChildProcess(['1', '2']);
