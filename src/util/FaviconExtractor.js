export const extractFavicon = async (url) => {
    const urlObject = new URL(url);
    console.log(urlObject);
    const origin = urlObject.origin;
    const href = urlObject.href;
    const possiblePaths = [
        `${origin}/favicon.ico`,
        `${origin}/favicon.png`,
        `${origin}/favicon.jpg`,
        `${href}favicon.ico`,
        `${href}favicon.png`,
        `${origin}/images/favicon.ico`,
        `${origin}/images/favicon.png`,
        `${origin}/images/favicon.jpg`,
        `${href}images/favicon.ico`,
        `${href}images/favicon.png`,
        `${href}images/favicon.jpg`,
    ];

    const fetchPromises = possiblePaths.map(path =>
        fetch(path)
            .then(response => response.status === 200 ? path : null)
            .catch(() => null)
    );

    const results = await Promise.allSettled(fetchPromises);

    for (const result of results) {
        if (result.status === 'fulfilled' && result.value !== null) {
            return result.value;
        }
    }

    return `${origin}/favicon.ico`;
};
