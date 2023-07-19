import styles from './CssModule.module.css';

console.log(styles);

const CSSModule = () => {  
    return (
        <div className={styles.wrapper}>
            안녕하세요! <span className="something">CSS Module Global!</span> 
        </div>
    )
}

export default CSSModule;