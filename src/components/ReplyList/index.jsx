import React from 'react';
import ReplyItem from '../ReplyItem';
import styles from './replyList.module.css';

export default function ReplyList({ replies }) {
    return (
        <div className={styles.replyList}>
            {replies.map((reply, index) => (
                <ReplyItem
                    key={index}
                    reply={reply.text}
                    author={reply.author}
                    date={reply.date}
                    likes={reply.likes}
                />
            ))}
        </div>
    );
};
