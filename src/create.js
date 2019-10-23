var config = require('../config.json');

var AWS = require('aws-sdk');
AWS.config.update({region: config.region});
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var util = require('./util');

main()
.then(() => {
    console.log("Created successfully!");
})
.catch(err => {
    console.error("Create failed!");
    console.error(err);
})

async function main() {
    await util.asyncRun(s3, s3.createBucket, {Bucket: config.bucketName, CreateBucketConfiguration: {LocationConstraint: config.region}});

    await util.asyncRun(s3, s3.putBucketWebsite, {Bucket: config.bucketName, WebsiteConfiguration: {IndexDocument: {Suffix: "index.html"}}});
    
    var publicReadPolicy = require('./bucketPolicy.json');
    publicReadPolicy.Statement[0].Resource = "arn:aws:s3:::"+config.bucketName+"/*";
    
    await util.asyncRun(s3, s3.putBucketPolicy, {Bucket: config.bucketName, Policy: JSON.stringify(publicReadPolicy)});

    console.log("List of Buckets now:");
    var res = await util.asyncRun(s3, s3.listBuckets);
    console.log(res.Buckets);
}
