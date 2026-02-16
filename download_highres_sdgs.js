const https = require('https');
const fs = require('fs');
const url = require('url');

const targets = [
    { file: 'Sustainable_Development_Goal_12.png', dest: 'frontend/public/sdg/sdg12.png' },
    { file: 'Sustainable_Development_Goal_13.png', dest: 'frontend/public/sdg/sdg13.png' },
    { file: 'Sustainable_Development_Goal_16.png', dest: 'frontend/public/sdg/sdg16.png' }
];

const fetchUrl = (u) => {
    return new Promise((resolve, reject) => {
        const options = url.parse(u);
        options.headers = { 'User-Agent': 'Mozilla/5.0' };
        https.get(options, (res) => {
            let data = '';
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchUrl(res.headers.location).then(resolve).catch(reject);
            }
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

const downloadFile = (fileUrl, dest) => {
    return new Promise((resolve, reject) => {
        const options = url.parse(fileUrl);
        options.headers = { 'User-Agent': 'Mozilla/5.0' };
        https.get(options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => { file.close(() => resolve(dest)); });
        }).on('error', reject);
    });
};

(async () => {
    for (const t of targets) {
        console.log(`Processing ${t.file}...`);
        try {
            const pageUrl = `https://commons.wikimedia.org/wiki/File:${t.file}`;
            const html = await fetchUrl(pageUrl);
            // Find "Original file" link
            // Pattern: <a href="...original.png" class="internal" ...>Original file</a>
            // Or just looking for upload.wikimedia.org... inside the page content main image area.
            // Usually: <div class="fullMedia"><a href="https://upload.wikimedia.org/wikipedia/commons/d/d7/Sustainable_Development_Goal_12.png" class="internal" ...>Original file</a>

            const match = html.match(/class="internal" href="(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"]+\.png)"/);
            if (match && match[1]) {
                console.log(`Found URL: ${match[1]}`);
                await downloadFile(match[1], t.dest);
                console.log(`Downloaded ${t.dest}`);
            } else {
                console.error(`Could not find original file URL for ${t.file}`);
            }
        } catch (e) {
            console.error(`Error processing ${t.file}:`, e);
        }
    }
})();
