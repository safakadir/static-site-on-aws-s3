# Static Website Hosting on AWS S3
Example of hosting a static web site on AWS using S3 storage service

## Steps
- Create a bucket
- Enable static website hosting property
- Turn off "Block public access"
- Add a bucket policy to make the content public.

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
      "Resource": "arn:aws:s3:::desenproje-static/*"
    }
  ]
}
```
