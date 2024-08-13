import React from 'react';
import style from './noShowStock.module.css'
export default function NoShowStock({ title }) {
    return (
        <div className={style.noShowStock}>
            {title}
        </div>
    );
}
