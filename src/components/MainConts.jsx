import React, { useState, useEffect } from "react";
import { Category, Videos } from "./";

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState([]);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetch(
      // "https://webstoryboy.github.io/site-youtube01/src/utils/test.json"
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${selectCategory}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setvideos(result.items))
      .catch((error) => console.log(error));
  }, [selectCategory]);
  // if (!videos?.items) return <Loader />;
  return (
    <main id="main">
      <aside id="aside">
        <Category
          setSelectCategory={setSelectCategory}
          selectCategory={selectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} 유튜버</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
