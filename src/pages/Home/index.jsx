import MainMenu from "../../components/MainMenu"
import ReplyForm from "../../components/ReplyForm"
import Topic from "../../components/Topic"
import ReplyList from "../../components/ReplyList"
import Sidebar from "../../components/Sidebar"

import styles from "./home.module.css"

export default function Home() {
    const menuOptions = [
        { name: 'Início', link: '#' },
        { name: 'Tópicos', link: '#' },
        { name: 'Sobre', link: '#' },
        { name: 'Contato', link: '#' },
        { name: 'Perfil', link: '#' },
    ];

    const mainTopic = {
        title: 'Como aprender React',
        subtitle: 'Melhores práticas e dicas',
        description: 'Vamos discutir as melhores formas de aprender React de forma eficaz.',
        author: 'João Silva',
        date: '1 de Outubro de 2023',
        likes: 42,
        replies: 15,
    };

    const replies = [
        { text: 'Comece pela documentação oficial.', author: 'Usuário1', date: '2 de Out, 2023', likes: 10 },
        { text: 'Pratique construindo pequenos projetos.', author: 'Usuário2', date: '3 de Out, 2023', likes: 8 },
    ];

    while (replies.length < 5) {
        replies.push({ text: 'Resposta adicional.', author: 'UsuárioX', date: '4 de Out, 2023', likes: 5 });
    }

    const recentTopics = [
        { title: 'React Hooks', link: '#' },
        { title: 'Gerenciamento de Estado', link: '#' },
        { title: 'Ciclo de Vida dos Componentes', link: '#' },
        { title: 'JSX em Profundidade', link: '#' },
        { title: 'Roteamento no React', link: '#' },
    ];

    const mostRepliedTopics = [
        { title: 'React vs Angular', link: '#' },
        { title: 'Melhor IDE para React', link: '#' },
        { title: 'Deploy de Aplicações React', link: '#' },
        { title: 'Usando Redux', link: '#' },
        { title: 'Testando Componentes React', link: '#' },
    ];

    const mostLikedTopics = [
        { title: 'Otimização de Performance', link: '#' },
        { title: 'Padrões em React', link: '#' },
        { title: 'Context API', link: '#' },
        { title: 'Code Splitting', link: '#' },
        { title: 'TypeScript com React', link: '#' },
    ];

    const handleReplySubmit = (replyText) => {
        console.log('Nova resposta enviada:', replyText);
    };

    const user = 'UsuárioAtual';

    return (
        <div className={styles.app}>
            <MainMenu options={menuOptions} />
            <div className={styles.content}>
                <div className={styles.main}>
                    <Topic {...mainTopic} />
                    <ReplyList replies={replies} />
                    <ReplyForm onSubmit={handleReplySubmit} user={user} />
                </div>
                <Sidebar
                    recentTopics={recentTopics}
                    mostRepliedTopics={mostRepliedTopics}
                    mostLikedTopics={mostLikedTopics}
                />
            </div>
        </div>
    )
}