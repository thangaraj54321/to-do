import React from "react";

const SearchItem = ({search,setSearch}) => {
  return (
    <form className="SearchForm" onSubmit={(e) => e.preventDefault()}>
      <lable htmlFor="search"></lable>
      <input
        id="search"
        type="text"
        placeholder="Search Item"
        role="searchbox"
        value={search}
        onChange={(e)=> setSearch(e.target.value) }
      />
    </form>
  );
};

export default SearchItem;
