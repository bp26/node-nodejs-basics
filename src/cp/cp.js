import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(childPath, [...args], { stdio: 'pipe' });
};

spawnChildProcess(['1', '2']);
