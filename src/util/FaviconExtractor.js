
export const extractFavicon = (url) => {
    const urlObject = new URL(url);
    const origin = urlObject.origin;
    return `${origin}/favicon.ico`;
}