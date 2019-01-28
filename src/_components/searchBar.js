import React from 'react';

const SearchBar = () => {
  const onInput = (e) => {
    localStorage.setItem("searchTerm", e.target.value);
    e.target.nextElementSibling.classList.remove("hidden");
  };

  const onKeyDown = () => {
    if(event.keyCode === 13){
      // console.log("\n\n\n", localStorage.searchTerm);
      document.querySelector("#search-bar").nextElementSibling.classList.add("hidden");
    }
    else if (event.keyCode === 27){
      document.querySelector("#search-bar").value = "";
      document.querySelector("#search-bar").blur();
      document.querySelector("#search-bar").nextElementSibling.classList.add("hidden");
    }
  };

  const resetForm = (e) => {
    e.target.value = "";
  };

  return (
    <div className="">
      <input
        id="search-bar"
        className="form-control search-my-style"
        placeholder="Find news about "
        onInput={onInput}
        onKeyDown={onKeyDown}
        onBlur={resetForm}
      />
      <p className="my-subscript hidden">Enter to search</p>
    </div>
  );
};

export default SearchBar;
