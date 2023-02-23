import React from 'react'
import { SearchContext } from '../../App';

import styles from "./Search.module.scss"
import cancelImg from '../../assets/img/cancel.png';

const Search = () => {

  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
      <input
        // function to get the value from the input 
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder='Pizza search...'
      />
      {searchValue && 
        <img onClick={() => setSearchValue('')} className={styles.clearIcon} src={cancelImg} alt="close" />
      }
    </div>
  )
}

export default Search;