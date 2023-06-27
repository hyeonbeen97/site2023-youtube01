import React from "react";

import { categories } from "../utils/contents";

const Categry = ({ setSelectCategory, selectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? "#a3b466" : "transparent",
            borderRadius: 50,
            transition: "background-color 0.3s ease",
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Categry;
