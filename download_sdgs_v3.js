const fs = require('fs');
const https = require('https');
const url = require('url');

const downloads = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Sustainable_Development_Goal_12.png', dest: 'frontend/public/sdg/sdg12.png' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Sustainable_Development_Goal_13.png', dest: 'frontend/public/sdg/sdg13.png' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sustainable_Development_Goal_16.png', dest: 'frontend/public/sdg/sdg16.png' }
];

const downloadFile = (fileUrl, dest) => {
    return new Promise((resolve, reject) => {
        const u = new URL(fileUrl);
        const opts = {
            hostname: u.hostname,
            path: u.pathname + u.search,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };

        const req = https.get(opts, (response) => {
            // Handle redirects
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                console.log(`Redirecting to ${response.headers.location}`);
                return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
            }

            if (response.statusCode !== 200) {
                return reject(new Error(`Failed with status ${response.statusCode}`));
            }

            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { }); // ignore unlink error
            reject(err);
        });
    });
};

(async () => {
    try {
        const promises = downloads.map(d => {
            console.log(`Downloading ${d.url} to ${d.dest}`);
            return downloadFile(d.url, d.dest);
        });
        const results = await Promise.all(promises);
        console.log('Downloaded files successfully:', results);
    } catch (error) {
        console.error('Download failed:', error);
        process.exit(1);
    }
})();
