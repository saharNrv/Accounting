import React from 'react';
import style from './input.module.css'

export default function Input({title ,placeholder}) {
    return (
        <div className={style.inputWrap}>
            <label>{title}</label>
            <input type="text" placeholder={placeholder} />
        </div>
    );
}
