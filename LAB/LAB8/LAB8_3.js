async function loadAll(imgArr) {
    const imgs = imgArr.map(async path => {
        const img = await createImage(path);
        return img;
    });

    console.log(imgs);

    const imageElements = await Promise.all(imgs);

    imageElements.forEach(img => {
        img.classList.add("parallel");
    });
}

async function createImage(path) {
    return new Promise((resolve, reject) => {
        const imgElement = new Image();
        imgElement.src = path;
        imgElement.onload = () => resolve(imgElement);
        imgElement.onerror = reject;
    });
}

// Example usage
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
