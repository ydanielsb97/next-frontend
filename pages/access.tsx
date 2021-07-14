import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Access.module.css'

const Access = () => {
    return (
        <div className={`${styles.container}`}>

            <LoginForm classCss={styles.form} />

        </div>
    )
}

export default Access
