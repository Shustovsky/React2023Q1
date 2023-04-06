import React, { useEffect, useState } from 'react';
import searchImg from '../../../assets/icons/icon-search.png';
import '../../../styles/search.scss';

interface SearchProps {
  onSearch: (searchValue: string) => Promise<void>;
}

export function Search({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('search') || '');

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await onSearch(searchValue);
    localStorage.setItem('search', searchValue);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  return (
    <form className="search-form" onSubmit={submitHandler}>
      <input
        type="text"
        className="search-form_input"
        placeholder="site search"
        value={searchValue}
        onChange={changeHandler}
      />
      <button className="search-form_btn" type="submit">
        <img src={searchImg} alt="search" />
      </button>
    </form>
  );
}
