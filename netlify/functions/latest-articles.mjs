import xml2js from 'xml2js';
import fetch from 'node-fetch';

const parser = new xml2js.Parser();

export async function handler() {
  try {
    console.log('latest-articles.mjs  Fetching RSS feed...');
    const response = await fetch("https://note.com/io_73/rss");
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }
    const text = await response.text();
    const result = await parser.parseStringPromise(text);
    console.log('Parsed result:', result);

    const items = result.rss.channel[0].item.slice(0, 4); // 最新の4つの記事だけを取得

    console.log(items);
    const articles = items.map((item) => {
      return {
        title: item.title && item.title[0] ? item.title[0] : null,
        link: item.link && item.link[0] ? item.link[0] : null,
        description: item.description && item.description[0] ? item.description[0] : null,
        thumbnail: item['media:thumbnail'] && item['media:thumbnail'][0] ? item['media:thumbnail'][0] : null,
        pubDate: item.pubDate && item.pubDate[0] ? item.pubDate[0] : null,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(articles),
      headers: {
        'Access-Control-Allow-Origin': '*', // 追加
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}
