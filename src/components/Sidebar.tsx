import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                className={styles.cover}
            />

                <div className={styles.profile}>
                    <Avatar src="https://avatars.githubusercontent.com/u/103700322?v=4"/>

                    <strong>Yago Ferreira</strong>
                    <span>Software Engineer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
        </aside>
    )
}