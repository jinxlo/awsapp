import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadImages } from './components/actions';
import { S3 } from 'aws-sdk';


const Upload = () => {
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        setImages(event.target.files);
    }

    const handleUpload = () => {
        const s3 = new S3({
            accessKeyId: '',
            secretAccessKey: '',
            region: ''
        });

        const uploadPromises = [];
        for (let i = 0; i < images.length; i++) {
            const file = images[i];
            const params = {
                Bucket: '',
                Key: file.name,
                Body: file
            };
            uploadPromises.push(s3.upload(params).promise());
        }

        Promise.all(uploadPromises)
            .then(() => {
                dispatch(uploadImages());
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default Upload;
