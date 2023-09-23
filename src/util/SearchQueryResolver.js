const GOOGLE = "https://www.google.com/search?q=";
const NAVER = "https://search.naver.com/search.naver?query=";
const STACKOVERFLOW = "https://stackoverflow.com/search?q=";
const GITHUB = "https://github.com/search?q=";
const NAMU = "https://namu.wiki/w/";
const WIKIPEDIA = "https://en.wikipedia.org/wiki/";
function isValidURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');
    if (!pattern.test(str)) return false;

    const tlds = ['.com', '.net', '.org', '.io', '.gov', '.edu', '.co']; // 이 리스트는 필요에 따라 확장 가능합니다.
    return tlds.some(tld => str.includes(tld)) || str.startsWith('www.');
}

export const resolveQuery = (query) => {
    const openSearch = (url, content) => {
        window.open(`${url}${content}`, '_blank');
    };

    if (isValidURL(query)) {
        if (!query.startsWith('http://') && !query.startsWith('https://')) {
            query = 'http://' + query;  // URL이 "http://" 또는 "https://"로 시작하지 않으면 "http://"를 추가
        }
        window.open(query, '_blank');
        return;
    }



    const searchMap = {
        "google": GOOGLE,
        "gg": GOOGLE,
        "g": GOOGLE,
        "naver": NAVER,
        "nv": NAVER,
        "n": NAVER,
        "stackoverflow": STACKOVERFLOW,
        "so": STACKOVERFLOW,
        "github": GITHUB,
        "gh": GITHUB,
        "namu": NAMU,
        "nm": NAMU,
        "wikipedia": WIKIPEDIA,
        "wiki": WIKIPEDIA,
    }

    if (query.at(0) === '#') {
        const colonIndex = query.indexOf(':');

        if (colonIndex > -1) {
            const prefix = query.substring(1, colonIndex);
            const content = query.substring(colonIndex + 1);

            const url = searchMap[prefix];
            if (url) {
                openSearch(url, content);
                return;
            }
        }
    }

    openSearch("https://www.google.com/search?q=", query);
};