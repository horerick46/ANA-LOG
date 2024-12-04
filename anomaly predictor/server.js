const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Replace with your Kaggle API token file's content
const KAGGLE_USERNAME = 'your_kaggle_username';
const KAGGLE_KEY = 'your_kaggle_api_key';

// Endpoint to fetch kernel data
app.get('/fetch-kernel', async (req, res) => {
    const apiEndpoint = 'https://www.kaggle.com/api/v1/kernels/view/essammohamed4320/intrusion-detection-system-with-ml-dl';

    try {
        const response = await fetch(apiEndpoint, {
            headers: {
                Authorization: `Basic ${Buffer.from(`${KAGGLE_USERNAME}:${KAGGLE_KEY}`).toString('base64')}`,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: `Kaggle API error: ${response.statusText}` });
        }

        const data = await response.json();
        res.json(data); // Send the fetched data to the frontend
    } catch (error) {
        console.error('Error fetching data from Kaggle:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
