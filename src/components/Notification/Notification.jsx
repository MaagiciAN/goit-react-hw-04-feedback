import React from 'react';
import css from './Notification.module.css'

export const Notification = ({ message }) => {
    return (
        <>
            <h4 className={css.title}>{message}</h4>
        </>
    );
};