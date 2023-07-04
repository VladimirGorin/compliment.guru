const fs = require('fs');

function readJsonFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

function setJsonValue(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, '\t'))
}

module.exports = {
  readJsonFile: readJsonFile,
  setJsonValue: setJsonValue
}