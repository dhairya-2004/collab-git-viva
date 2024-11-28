const express = require('express');
const path = require('path');
const simpleGit = require('simple-git');
require('dotenv').config();

const app = express();
const git = simpleGit();


app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO_URL = process.env.GITHUB_REPO_URL;
const FILE_PATH = 'file.txt'; 


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
































































































































// Clone the GitHub repo if not already cloned
// const cloneRepo = async () => {
//     try {
//         await git.clone(GITHUB_REPO_URL, './repo');
//         console.log('Repository cloned');
//     } catch (error) {
//         console.log('Repository already cloned');
//     }
// };

// // Save file content to GitHub repository
// app.post('/save-file', async (req, res) => {
//     const { content } = req.body;
//     try {
//         await git.cwd('./repo');
//         await git.add(FILE_PATH);        // Stage the file
//         await git.commit('Updated file'); // Commit changes
//         await git.push('origin', 'main'); // Push to GitHub
//         res.json({ message: 'File saved to GitHub successfully' });
//     } catch (error) {
//         console.error('Error saving file:', error);
//         res.status(500).json({ message: 'Failed to save file to GitHub' });
//     }
// });

// // Initialize the repository on app startup
// cloneRepo();
