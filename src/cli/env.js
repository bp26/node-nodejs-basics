const parseEnv = () => {
  const envArr = Object.entries(process.env);
  envArr.forEach((env) => {
    if (env[0].startsWith('RSS_')) {
      console.log(`${env[0]}=${env[1]}`);
    }
  });
};

parseEnv();
