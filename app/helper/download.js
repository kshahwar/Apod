const fs = require("fs"),
  request = require("request");
const dbConfig = require("../config/db.config");
const download = function (uri, filename, callback) {
    console.log(`${dbConfig.IMAGEPATH}${filename}`);
  request.head(uri, function (err, res, body) {
    request(uri)
      .pipe(fs.createWriteStream(`${__dirname}${dbConfig.IMAGEPATH}${filename}`))
      .on("close", callback);
      
      console.log(`${__dirname}${dbConfig.IMAGEPATH}${filename} from download`);
  });
};

module.exports.download = download;
