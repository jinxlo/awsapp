import AWS from 'aws-sdk';

const rekognition = new AWS.Rekognition({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export const detectLabels = async (image) => {
  const params = {
    Image: {
      S3Object: {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
        Name: image,
      },
    },
    MaxLabels: 10,
    MinConfidence: 80,
  };

  const data = await rekognition.detectLabels(params).promise();

  return data.Labels;
};

export const createCollection = async (collectionId) => {
  const params = {
    CollectionId: collectionId,
  };

  await rekognition.createCollection(params).promise();
};

export const indexFaces = async (collectionId, image) => {
  const params = {
    CollectionId: collectionId,
    Image: {
      S3Object: {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
        Name: image,
      },
    },
  };

  const data = await rekognition.indexFaces(params).promise();

  return data.FaceRecords;
};

export const searchFacesByImage = async (collectionId, image) => {
  const params = {
    CollectionId: collectionId,
    Image: {
      S3Object: {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
        Name: image,
      },
    },
    MaxFaces: 10,
    FaceMatchThreshold: 80,
  };

  const data = await rekognition.searchFacesByImage(params).promise();

  return data.FaceMatches;
};
