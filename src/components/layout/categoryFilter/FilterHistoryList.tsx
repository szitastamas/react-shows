import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import RootStore from '../../../stores/RootStore';

interface IProps {
    clickHandler: (value: string) => void;
}
const FilterHistoryList: React.FC<IProps> = ({ clickHandler }) => {
  const { uiStore } = useContext(RootStore);

  return (
    <ul className="filter-history-list">
      {uiStore.categoryFilterKeyHistory.map((keyWord) => (
        <li
          key={keyWord}
          className='filter-history-item'
          onClick={() => clickHandler(keyWord)}
        >
          {keyWord}
        </li>
      ))}
    </ul>
  );
};

export default observer(FilterHistoryList);
