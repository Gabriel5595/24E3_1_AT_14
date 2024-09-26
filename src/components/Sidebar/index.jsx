import React from 'react';
import styles from './sidebar.module.css';

export default function Sidebar({ recentTopics, mostRepliedTopics, mostLikedTopics }) {
    return (
        <aside className={styles.sidebar}>
            <Section title="Tópicos Recentes" topics={recentTopics} />
            <Section title="Mais Respondidos" topics={mostRepliedTopics} />
            <Section title="Mais Curtidos" topics={mostLikedTopics} />
        </aside>
    );
};

const Section = ({ title, topics }) => (
    <div className={styles.section}>
        <h3>{title}</h3>
        <ul>
            {topics.map((topic, index) => (
                <li key={index}>
                    <a href={topic.link}>{topic.title}</a>
                </li>
            ))}
        </ul>
    </div>
);
