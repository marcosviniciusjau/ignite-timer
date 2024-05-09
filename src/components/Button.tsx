import styles from './Button.module.css';
interface ButtonProps {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'success';
}
export function Button(props: ButtonProps) {
    return <button className={`${styles.button} ${styles[props.color || '']}`}>Enviar</button>
    
}