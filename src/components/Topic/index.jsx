import React from 'react';
import styles from './topic.module.css';

export default function Topic({ title, subtitle, description, author, date, likes, replies }) {
    return (
        <div className={styles.topic}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <div className={styles.meta}>
                <span>Por {author}</span>
                <span>{date}</span>
                <span>{likes} Curtidas</span>
                <span>{replies} Respostas</span>
            </div>
        </div>
    );
};