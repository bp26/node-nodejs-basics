import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  const cpuNum = os.cpus().length;
  const promises = [];
  const results = {};
  for (let i = 0; i < cpuNum; i++) {
    const worker = new Worker(workerPath, { workerData: i + 10 });
    worker.on('message', (result) => {
      results[i] = {
        status: 'resolved',
        data: result,
      };
    });
    worker.on('error', () => {
      results[i] = {
        status: 'error',
        data: null,
      };
    });
    promises.push(
      new Promise((res) => {
        worker.on('exit', () => {
          res();
        });
      })
    );
  }
  await Promise.all(promises);
  console.log(Object.values(results));
};

await performCalculations();
