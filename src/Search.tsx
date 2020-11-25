import React, {useState} from "react"

type SearchProps = {
  search: (searchValue:string) => void
}

const Search = ({search}:SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  
  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;