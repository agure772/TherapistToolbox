import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const OPENAI_API_KEY = ''; // Replace with your actual API key

// Helper functions to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/generate', async (req, res) => {
    const { issue, technique } = req.body;

    if (!issue || !technique) {
        console.error('Issue or technique is missing');
        res.status(400).send('Issue or technique is missing');
        return;
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: `Generate a scenario for a client dealing with ${issue} using the ${technique} technique.` }
                ]
            })
        });

        const data = await response.json();

        if (response.ok) {
            res.json({ paragraph: data.choices[0].message.content });
        } else {
            console.error('API response error:', data);
            res.status(500).send('Error generating scenario');
        }
    } catch (error) {
        console.error('Error generating scenario:', error);
        res.status(500).send('Error generating scenario');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
