import React, { useState } from "react";
import { Category, Videos } from "./";

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState("추천");
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
        <Videos />
      </section>
    </main>
  );
};

export default MainConts;
