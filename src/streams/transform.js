import { pipeline } from 'stream';
import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });
  pipeline(stdin, reverse, stdout, (err) => {
    if (err) {
      console.log(err.stack);
    }
  });
};

await transform();
