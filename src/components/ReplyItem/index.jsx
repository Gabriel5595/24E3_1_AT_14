import React from 'react';
import styles from './replyItem.module.css';

export default function ReplyItem({ reply, author, date, likes }) {
    return (
        <div className={styles.replyItem}>
            <p>{reply}</p>
            <div className={styles.meta}>
                <span>Por {author}</span>
                <span>{date}</span>
                <span>{likes} Curtidas</span>
            </div>
        </div>
    );
};
