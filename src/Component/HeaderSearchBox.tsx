import React, { useState } from 'react';

type HeaderSearchBoxProps = {
  onSearch: (value: string) => void,
}

const HeaderSearchBox: React.FC<HeaderSearchBoxProps> = ({ onSearch }: HeaderSearchBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form className="search-area" onSubmit={handleSearchClick}>
      <span className="header-content-label">Search a Movie: </span>
      <input onChange={handleSearchBarChange} className="ui-input" />
      <button className="ui-button" type="submit" onClick={handleSearchClick}>Search</button>
    </form>
  );
};

export default HeaderSearchBox;
