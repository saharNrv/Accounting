import React from 'react';
import style from './bg.module.css'

export default function Bg({showModal}) {
  return (
    <div className={showModal ? style.cartDetailsBG : ''}></div>

  );
}
