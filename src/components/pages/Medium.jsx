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

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  // };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };



  const truncateText = (html, maxLength) => {
    const text = html.replace(/<[^>]*>?/gm, ''); // Strip HTML tags
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };


  return (
    <section className='medium section'>
      <div className="medium__container">
        <h2>Medium</h2>
        <p className='medium__I-post'>英語で記事を投稿しています</p>
        {stories.map((story, index) => (
          <div key={index} className='medium__stories-container'>

            <a href={story.link} target="__blank" rel="noopener noreferrer">
              <div className="medium__story">
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


<div
          className={`medium__button-container`}
        >
          <div className="medium__profile-container">
          <img
            className="medium__profile-img"
            src="medium-profile.jpeg"
            alt="medium profile"
          />
          <p className="medium__profile-p">
          I'm a self-taught UI/UX and Frotend learner. <br /> I like nature, design, and technology.
          </p>
          </div>

          <button 
          className="view-more-container"
          onClick={() => {
            window.open("https://medium.com/@iori730002204294", "_blank", "noopener,noreferrer");
          }}
          >
            <p className="view-more-container-p">もっと見る</p>
            <svg
              className="arrow-container"
              width="100"
              height="100"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="arrow-rect"
                width="100"
                height="100"
                rx="35"
                transform="matrix(-1 0 0 1 70 0)"
                fill="white"
                fillOpacity="0.5"
              />
              {/* <path
                className="arrow-border"
                d="M39.7322 0.030804C34.4094 -0.12516 29.2024 0.311121 24.1113 1.33964C23.6182 1.66421 22.3771 2.29861 20.3878 3.24282C11.7566 7.33581 5.73414 13.802 2.32042 22.6413C0.0509338 28.5279 -0.657104 35.268 0.657814 41.5593C0.986542 43.1442 1.34687 44.7881 1.73882 46.4911C3.55104 50.9719 6.06496 55.0712 9.2806 58.789C17.3092 66.975 27.1247 70.6781 38.7271 69.8983C42.263 69.4852 45.4681 68.6569 48.3424 67.4134C57.1 63.4216 63.2763 57.4191 66.8713 49.4059C70.8603 40.516 71.0942 29.8999 67.2316 21.3767C64.6734 15.7325 61.5842 11.4689 57.964 8.58563C55.7851 6.84474 54.3501 5.6708 53.6589 5.0638C51.5938 4.24183 49.2759 3.266 46.7051 2.13632C44.3597 1.1057 42.1914 0.631474 39.7322 0.030804ZM3.95774 35.0025C3.95774 26.7621 7.23063 18.8592 13.0564 13.0323C18.8822 7.20547 26.7837 3.93199 35.0226 3.93199C39.1021 3.93199 43.1416 4.73568 46.9106 6.29711C50.6795 7.85855 54.1041 10.1472 56.9887 13.0323C59.8733 15.9175 62.1616 19.3427 63.7227 23.1123C65.2839 26.882 66.0874 30.9222 66.0874 35.0025C66.0874 39.0827 65.2839 43.123 63.7227 46.8926C62.1616 50.6623 59.8733 54.0875 56.9887 56.9726C54.1041 59.8578 50.6795 62.1464 46.9106 63.7078C43.1416 65.2693 39.1021 66.073 35.0226 66.073C30.9431 66.073 26.9035 65.2693 23.1346 63.7078C19.3656 62.1464 15.941 59.8578 13.0564 56.9726C10.1718 54.0875 7.88355 50.6623 6.3224 46.8926C4.76125 43.123 3.95774 39.0827 3.95774 35.0025Z"
                fill="#065D44"
              /> */}
              <path
                className="arrow-path"
                d="M43.1971 37.0388C43.2181 37.1063 43.216 37.1863 43.1907 37.279C43.1739 37.3254 43.1402 37.3739 43.0896 37.4245C39.9077 40.5775 36.7848 43.7242 33.7208 46.8645C32.8948 47.7076 32.8484 48.5906 33.5818 49.5138C33.7208 49.6908 33.8978 49.8236 34.1128 49.9121C35.04 50.2873 35.8555 50.1208 36.5593 49.4126L49.6705 36.3433C50.5682 35.4454 50.5682 34.5497 49.6705 33.6561L36.5719 20.5804C35.826 19.8385 34.9936 19.7184 34.0748 20.22C33.94 20.2917 33.822 20.3823 33.7208 20.4919C32.8316 21.4361 32.8463 22.3677 33.7651 23.2866L42.9379 32.4548C43.5111 33.0238 43.3973 33.2493 42.5965 33.1313C42.0655 33.047 41.526 33.009 40.9782 33.0175C34.5722 33.068 28.2652 33.0639 22.0573 33.0048C20.755 32.9922 20.0618 33.6371 19.9775 34.9396C19.969 35.0872 19.9775 35.2368 20.0028 35.3885C20.1587 36.396 20.7466 36.8997 21.7665 36.8997L43.0137 36.9124C43.0542 36.9123 43.0936 36.9245 43.1264 36.9471C43.1593 36.9698 43.184 37.0018 43.1971 37.0388Z"
                fill="#065D44"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Medium;
