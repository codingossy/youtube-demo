import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <>
      <form
        className="flex md:w-[30%] relative  items-center gap-x-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="px-2 rounded-2xl p-1 w-full text-black outline-none"
          placeholder="search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-2">
          <FaSearch className="text-red" color="red" />
        </div>
      </form>
    </>
  );
};

export default Search;
