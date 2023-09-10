
export const resolveQuery = (query) => {

    if(query.at(0) === '#') {
        const colonIndex = query.indexOf(':');

        if (colonIndex > -1) {
            const prefix = query.substring(1, colonIndex); // "topic"을 추출
            const content = query.substring(colonIndex + 1); // "example"을 추출

            // prefix와 content를 사용하여 원하는 작업을 수행합니다.
            // 예를 들어, console.log로 출력할 수 있습니다.
            if(prefix === "google" || prefix === "gg" || prefix === "g") {
                window.open(`https://www.google.com/search?q=${content}`, '_blank');
            } else if(prefix === "naver" || prefix === "nv" || prefix === 'n') {
                window.open(`https://search.naver.com/search.naver?query=${content}`, '_blank');
            } else if (prefix === "stackoverflow" || prefix === "so" || prefix === "s") {
                window.open(`https://stackoverflow.com/search?q=${content}`, '_blank');
            } else if (prefix === "github" || prefix === "gh") {
                window.open("https://github.com/search?q=" + content, '_blank');
            } else if (prefix === "namu" || prefix === "nm") {
                window.open("https://namu.wiki/w/" + content, '_blank');
            } else if (prefix === "wiki" || prefix === "wk") {
                window.open("https://en.wikipedia.org/wiki/" + content, '_blank');
            } else {
                window.open(`https://www.google.com/search?q=${query}`, '_blank');
            }
        } else {
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }

    } else {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
}