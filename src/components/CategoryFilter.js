import React from "react";

function CategoryFilter({categories, selectedategory, handleSelectedCategory}) {
//const handleCategory=(category)=>{
//handleSelectedCategory(category)}

const categoryButtons =categories.map(category=>(
  <button key={category} 
  onClick={()=>handleSelectedCategory(category)}
   className={category === selectedategory ? "selected": null}
  >{category}
    </button>
))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
