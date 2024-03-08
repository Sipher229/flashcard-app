import styles from "../css_modules/Header.module.css"

function Header() {
  return (
    <header className={`${styles.header} shadow-md`}>
    <h1 className={styles.logo}>FlashCard</h1>
    </header>
  )
}

export default Header