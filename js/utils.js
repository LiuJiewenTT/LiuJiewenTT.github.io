let proxy = 'https://api.allorigins.win/get?url=';


export async function fetchCurseforgeProjectDownloads(url) {
    try {
        const html = await fetch(`${proxy}${encodeURIComponent(url)}`).then(response => response.json()).then(data => data.contents);

        // 将 HTML 转换为 DOM 解析
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // 直接通过 ID 获取 script 标签内容
        const script = doc.getElementById('__NEXT_DATA__');

        if (script) {
            const json = JSON.parse(script.textContent);
            
            // 提取 downloads 值
            const downloads = json?.props?.pageProps?.project?.downloads;
            
            if (downloads !== undefined) {
                console.log('Downloads:', downloads);
                return downloads
            } else {
                console.log('未找到 downloads 值');
            }
        } else {
            console.log('未找到 __NEXT_DATA__ 脚本标签');
        }
    } catch (error) {
        console.error('请求或解析出错:', error);
    }
}
