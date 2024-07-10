import React from 'react';
import style from './Topbar.module.css';

export default function Topbar({title}) {
  return (
    <div className={style.topbar}>
        <h1>{title}</h1>
      
    </div>
  );
}
