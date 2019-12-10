// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create params for S3.deleteBucket
let bucketParams = {
    Bucket : 's3buckettestingbc'
};

// Call S3 to delete the bucket
s3.deleteBucket(bucketParams, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});

//***********
// node s3_deletebucket.js
//************