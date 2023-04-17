import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hook';
import { setSearchValue } from '../../../store/searchSlice';
import searchImg from '../../../assets/icons/icon-search.png';
import './Search.scss';

interface SearchProps {
  onSearch: (searchValue: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const dispatch = useDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await onSearch(searchValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form_input"
        placeholder="site search"
        value={searchValue}
        onChange={handleChange}
      />
      <button className="search-form_btn" type="submit">
        <img src={searchImg} alt="search" />
      </button>
    </form>
  );
}
