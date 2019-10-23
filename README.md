# Static Website Hosting on AWS S3
Giving an example of hosting a static web site on AWS using S3 storage service, and automating its steps via node scripts.

## Steps
- Create a bucket
- Enable static website hosting property
- Upload content into the bucket
- Turn off "Block public access"
- Add a bucket policy to make the content public

The bucket policy that should be added:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<your-bucket-name>/*"
    }
  ]
}
```

## How to benefit this project as a tool
- Place static website content into /www
- Edit config.json
- Run `npm run create` to initiate your bucket to serve your static website.
- Run `npm run update` to upload updated static files and change the content.


## Remaining Process
- Create script halfway completed. It doesn't upload files yet.
- Update script has not been developed yet.
