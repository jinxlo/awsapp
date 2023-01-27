import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export const uploadFiles = async (bucketName, files) => {
  const promises = files.map(async (file) => {
    const params = {
      Bucket: bucketName,
      Key: file.name,
      Body: file,
    };

    await s3.upload(params).promise();
  });

  await Promise.all(promises);
};

export const callLambdaFunction = async (functionName, payload) => {
  const lambda = new AWS.Lambda();

  const params = {
    FunctionName: functionName,
    Payload: JSON.stringify(payload),
  };

  const data = await lambda.invoke(params).promise();

  return JSON.parse(data.Payload);
};
