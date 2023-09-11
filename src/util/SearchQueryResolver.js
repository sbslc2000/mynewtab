const GOOGLE = "https://www.google.com/search?q=";
const NAVER = "https://search.naver.com/search.naver?query=";
const STACKOVERFLOW = "https://stackoverflow.com/search?q=";
const GITHUB = "https://github.com/search?q=";
const NAMU = "https://namu.wiki/w/";
const WIKIPEDIA = "https://en.wikipedia.org/wiki/";


export const resolveQuery = (query) => {
    const openSearch = (url, content) => {
        window.open(`${url}${content}`, '_blank');
    };


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