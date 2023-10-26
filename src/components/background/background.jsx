import styles from'./background.module.css'
 const Background=()=>{
    return(
        <div className={styles.background}>
        <div className={styles.background__left}></div>
        <div className={styles.background__right}></div>
        </div>
    )
}
export default Background;