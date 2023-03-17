import React from 'react';
import { SearchState } from '../models';
import searchImg from '../assets/icons/icon-search.png';

type Props = {
  onSearch: (searchValue: string) => Promise<void>;
};

export class Search extends React.Component<Props, SearchState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('search') || '',
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  public componentWillUnmount(): void {
    localStorage.setItem('search', this.state.searchValue);
  }

  private async submitHandler(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    await this.props.onSearch(this.state.searchValue);
    localStorage.setItem('search', this.state.searchValue);
  }

  private changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: event.target.value });
  }

  public render(): JSX.Element {
    return (
      <form className="search-form" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="search-form_input"
          placeholder="site search"
          value={this.state.searchValue}
          onChange={this.changeHandler}
        />
        <button className="search-form_btn" type="submit">
          <img src={searchImg} alt="search" />
        </button>
      </form>
    );
  }
}
