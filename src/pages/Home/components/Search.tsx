import searchImg from '../../../assets/icons/icon-search.png';
import './Search.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hook';
import { setSearchValue } from '../../../store/searchSlice';

interface SearchProps {
  onSearch: (searchValue: string) => Promise<void>;
}

export function Search({ onSearch }: SearchProps) {
  const dispatch = useDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await onSearch(searchValue);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(event.target.value));
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
