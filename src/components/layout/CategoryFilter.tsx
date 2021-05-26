import React, { useContext, useState } from 'react';
import RootStore from '../../stores/RootStore';
import FilterHistoryList from './categoryFilter/FilterHistoryList';

const CategoryFilter = () => {
  const { movieStore, uiStore } = useContext(RootStore);

  const [filter, setFilter] = useState('');

  const handleChange = (value: string) => {
    setFilter(value);
  };

  const checkEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.persist();
    const key = event.key;

    if(key === 'Enter') {
        event.currentTarget.blur();
        triggerSearch();
    }
  }

  const resetInput = () => {
      setFilter('')
  }

  const triggerSearch = async (value?: string) => {
    if (!filter && !value) return;

    let searchParam = filter;

    if (value && value.length > 0) {
      searchParam = value;
    }

    uiStore.addSearchKeyToHistory(searchParam);
    resetInput();

    await movieStore.loadByParams({ q: searchParam });
  };

  return (
    <div className='category-filter-container'>
      <div className='filter-input-group'>
        <input
          type='text'
          className="filter-input"
          value={filter}
          onChange={(e) => handleChange(e.currentTarget.value)}
          onKeyPress={checkEnter}
        />
        <button className="search-btn" onClick={() => triggerSearch()}><i className={uiStore.generalIcons.search}></i></button>
      </div>
      <FilterHistoryList clickHandler={triggerSearch} />
    </div>
  );
};

export default CategoryFilter;
