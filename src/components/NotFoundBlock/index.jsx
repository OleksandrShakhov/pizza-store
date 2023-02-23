import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {

  return (
    <div className={styles.root}>
      <h1>
      <span>😕</span>
      <br />
      Nothing Found
      </h1>
      <p className={styles.description}>Unfortunately this page does't exist in our store anymore</p>
    </div>
  );
};

export default NotFoundBlock;