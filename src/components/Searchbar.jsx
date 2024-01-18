import React from "react";

const SearchBar = ({
  onSearch,
  onFilterByPrice,
  onFilterByCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="filter-dropdown">
        <label>Filter by Price:</label>
        <select onChange={onFilterByPrice}>
          <option value="">All</option>
          <option value="0-10">$0 - $10</option>
          <option value="10.01-50">$10.01 - $50</option>
          <option value="50 and up">$50 and up</option>
        </select>
      </div>
      <div className="filter-dropdown">
        <label>Filter by Category:</label>
        <select onChange={onFilterByCategory}>
          <option value="">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
