function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.onload = () => {
            document.querySelector('.image').appendChild(img);
            resolve();
        };
        img.onerror = () => {
            reject(new Error(`Error: Unable to load image from ${imgPath}`));
        };
    });
}

async function showImage(imgPath) {
    try {
        await createImage(imgPath);
        await sleep(2000);
        document.querySelector('img').style.display = 'none';
    } catch (error) {
        console.error(error);
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

showImage('https://example.com/image1.jpg');
showImage('https://example.com/image2.jpg');
