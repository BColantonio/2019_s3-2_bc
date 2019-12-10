// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// call S3 to retrieve upload file to specified bucket
let uploadParams = {Bucket: process.argv[2], Key: '', Body: ''};
let file = process.argv[3];

// Configure the file stream and obtain the upload parameters
let fs = require('fs');
let fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
    console.log('File Error', err);
});
uploadParams.Body = fileStream;
let path = require('path');
uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
    if (err) {
        console.log("Error", err);
    } if (data) {
        console.log("Upload Success", data.Location);
    }
});

//**************
// node s3_upload.js BUCKET_NAME FILE_NAME
//**************