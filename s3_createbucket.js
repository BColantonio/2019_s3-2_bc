// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling createBucket
let bucketParams = {
    Bucket : process.argv[2],
    ACL : 'public-read'
};

// call S3 to create the bucket
s3.createBucket(bucketParams, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Location);
    }
});

//**************
// To run the example, type the following at the command line.node s3_createbucket.js BUCKET_NAME
//**************