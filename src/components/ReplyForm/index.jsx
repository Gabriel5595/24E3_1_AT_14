import React, { useState } from 'react';
import styles from './replyForm.module.css';

export default function ReplyForm({ onSubmit, user }) {
    const [reply, setReply] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reply.trim()) {
            onSubmit(reply);
            setReply('');
        }
    };

    return (
        <form className={styles.replyForm} onSubmit={handleSubmit}>
            <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Escreva sua resposta..."
                required
            />
            <div className={styles.formFooter}>
                <span>Logado como {user}</span>
                <button type="submit">Enviar Resposta</button>
            </div>
        </form>
    );
};
