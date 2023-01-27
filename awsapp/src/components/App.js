import React, { useState } from 'react';
import Upload from './Upload';
import Results from './Results';

function App() {
const [results] = useState([]);

const handleUpload = (files) => {
// call the lambda function to send the files to Amazon Rekognition
// and update the results state with the returned data
}

const handleDownload = () => {
// handle the download of the results CSV file
}

return (
<div className="App">
<Upload onUpload={handleUpload} />
<Results results={results} onDownload={handleDownload} />
</div>
);
}

export default App;