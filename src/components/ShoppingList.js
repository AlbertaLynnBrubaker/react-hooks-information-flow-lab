import React, { useState } from "react";
import Filter from "./Filter"
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const itemsToDisplay = items.filter(item => {
    if(selectedCategory === 'All') {
      return true
    } else if (item.category === selectedCategory) {
      return true
    }
  })

  return (
    <div className="ShoppingList">
      <Filter 
        onCategoryChange= {onCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
