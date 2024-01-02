import React, { useEffect, useState } from 'react';

const Medium = () => {
  const [stories, setStories] = useState([]);

  const fetchMedium = async () => {
    const rssUrl = "https://medium.com/feed/@iori730002204294";
    try {
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const modifiedStories = data.items.slice(0, 2).map(story => {

        const imageRegex = /<img.*?src="(.*?)"/;
        const match = imageRegex.exec(story.content);
        const imageUrl = match ? match[1] : null;

        // Extract tags
        const tagRegex = /<a.*?href="\/tag\/(.*?)\?source/;
        const tagMatches = story.content.match(tagRegex);
        const tags = tagMatches ? tagMatches.slice(1) : [];

        // Extract reading time
        const readingTimeRegex = /<span>(.*?) min read<\/span>/;
        const readingTimeMatch = readingTimeRegex.exec(story.content);
        const readingTime = readingTimeMatch ? readingTimeMatch[1] : null;

        return { ...story, imageUrl, tags, readingTime };
        
      });

      console.log(data.items); // Log the fetched items
      console.log(modifiedStories); // Log the stories after processing
      setStories(modifiedStories);
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
  };




  useEffect(() => {
    fetchMedium();
  }, []);

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const now = new Date();
  //   const diffTime = Math.abs(now - date);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  

  const truncateText = (html, maxLength) => {
    const text = html.replace(/<[^>]*>?/gm, ''); // Strip HTML tags
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  

  return (
    <section className='medium section'>
      <div className="medium_container">
      <h2>Medium</h2>
      <p className='medium_I-post'>英語で記事を投稿しています</p>
      {stories.map((story, index) => (
        <div key={index} className='medium_story-container'>
         
            <a href={story.link} target="_blank" rel="noopener noreferrer">
          <div className="medium_story">
              {story.imageUrl && <img src={story.imageUrl} alt={story.title} className='story-image' />}
              <div className="story-text-container">
                <p className='story-date'>{formatDate(story.pubDate)}</p>
              <h3>{story.title}</h3>
                <p className='story-excerpt'>{truncateText(story.content, 200)} {/* Adjust character limit as needed */}</p>

              </div>

              {/* rssにdataがない */}
              {/* <div className="story-tags-container">
                <div className="story-tags">
                  {story.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="story-tag">{tag}</span>
                  ))}
                </div>
                {story.readingTime && <p className="story-reading-time">{story.readingTime} min read</p>}
              </div> */}


          </div>
            </a>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Medium;
