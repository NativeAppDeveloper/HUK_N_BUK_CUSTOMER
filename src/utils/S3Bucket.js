import { RNS3 } from 'react-native-aws3';

export const DocumentsUpload = async(file) => {
    let obj={}
  const options = {
    keyPrefix: 'student/',
    bucket: "aitutor",
    region: 'us-east-2',
    accessKey: 'AKIA2AORTHGSFAJT4LXV',
    secretKey: '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',
    successActionStatus: 201
  };
 await RNS3.put(file, options).then(response => {
    console.log("data ",file)
    if (response.status !== 201) {
      console.error(response);
      throw new Error('Failed to upload image to S3');
    }
    obj= response.body

  });

  return obj

};