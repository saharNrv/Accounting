import React from 'react';
import style from './input.module.css'

export default function Input({ title, placeholder, onChange, value ,type}) {
    return (
        <div className={style.inputWrap}>
            <label>{title}</label>
            <input 
            type={type} 
            placeholder={placeholder} 
            onChange={(event) => onChange(event.target.value)}
            value={value}
             />
        </div>
    );
}
