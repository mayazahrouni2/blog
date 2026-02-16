const fs = require('fs');
const https = require('https');
const url = require('url');

const downloads = [
    { url: 'https://open-sdg.github.io/sdg-translations/assets/img/goals/en/12.png', dest: 'frontend/public/sdg/sdg12.png' },
    { url: 'https://open-sdg.github.io/sdg-translations/assets/img/goals/en/13.png', dest: 'frontend/public/sdg/sdg13.png' },
    { url: 'https://open-sdg.github.io/sdg-translations/assets/img/goals/en/16.png', dest: 'frontend/public/sdg/sdg16.png' }
];

const downloadFile = (fileUrl, dest) => {
    return new Promise((resolve, reject) => {
        // Basic redirect handling
        const opts = url.parse(fileUrl);
        opts.headers = { 'User-Agent': 'Mozilla/5.0' }; // Add User-Agent

        const req = https.get(opts, (response) => {
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
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

(async () => {
    try {
        const promises = downloads.map(d => downloadFile(d.url, d.dest));
        const results = await Promise.all(promises);
        console.log('Downloaded files successfully:', results);
    } catch (error) {
        console.error('Download failed:', error);
        process.exit(1);
    }
})();
