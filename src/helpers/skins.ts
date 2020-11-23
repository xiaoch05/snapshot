const requireFile = require.context(
  '@xiaoch05/snapshot-spaces/skins/',
  true,
  /[\w-]+\.scss$/
);

requireFile.keys().map(file => requireFile(file));

export default requireFile
  .keys()
  .map(file => file.replace('./', '').replace('.scss', ''));
