const fs = require('fs');
const https = require('https');
const path = require('path');

const downloads = [
    { url: 'https://open-sdg.github.io/sdg-translations/assets/img/goals/en/12.png', dest: 'frontend/public/sdg/sdg12.png' },
    { url: 'https://open-sdg.github.io/sdg-translations/assets/img/goals/en/13.png', dest: 'frontend/public/sdg/sdg13.png' },
    { url: 'https://open-sdg.github.io/sdg-translations/assets/img/goals/en/16.png', dest: 'frontend/public/sdg/sdg16.png' }
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

(async () => {
    try {
        const promises = downloads.map(d => downloadFile(d.url, d.dest));
        const results = await Promise.all(promises);
        console.log('Downloaded files:', results);
    } catch (error) {
        console.error('Download failed:', error);
    }
})();
