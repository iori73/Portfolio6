import express from 'express';
import xml2js from 'xml2js';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const parser = new xml2js.Parser();

app.use(cors());
app.use(express.json());

app.get('/api/latest-articles', async (req, res) => {
  try {
    const response = await fetch('https://note.com/yoriss_b0607/rss');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const text = await response.text();
    parser.parseString(text, (err, result) => {
      if (err) {
        console.error('XML parsing error:', err);
        res.status(500).send(err);
        return;
      }
      const items = result.rss.channel[0].item.slice(0, 4);  // 最新の4つの記事だけを取得

      const articles = items.map((item) => {
        return {
          title: item.title && item.title[0] ? item.title[0] : null,
          link: item.link && item.link[0] ? item.link[0] : null,
          description: item.description && item.description[0] ? item.description[0] : null,
          thumbnail: item['media:thumbnail'] && item['media:thumbnail'][0].$.url ? item['media:thumbnail'][0].$.url : null,
          pubDate: item.pubDate && item.pubDate[0] ? item.pubDate[0] : null,
        };
      });

      res.json(articles);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(3002, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:3002');
});


// app.listen(3002, () => {
//   console.log('Server is running on http://localhost:3002');
// });

app.listen(3002, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:3002');
});
