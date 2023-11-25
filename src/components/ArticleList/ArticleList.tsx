import React, { useState, useEffect } from 'react';

import styles from './styles/ArticleList.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const ArticleList = (props:{
        children?: any
    }
) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}

export default ArticleList;