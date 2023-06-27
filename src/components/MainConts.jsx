import React, { useState, useEffect } from "react";
import { Category, Videos } from "./";

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState("추천");
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch(
      // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=프로그래머&key=AIzaSyBmD-yNiyzU1muLrsF_Gg7FKf5HgyXfxlo",
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=프로그래머&key=AIzaSyBTyYekqKdJKfjwf6aUYLwTbtRLG_jR2H8"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);
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
        <Videos youtubes={youtubes} />
      </section>
    </main>
  );
};

export default MainConts;
