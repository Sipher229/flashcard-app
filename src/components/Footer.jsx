import styles from "../css_modules/Footer.module.css"

function Footer() {
  return (
    <footer className={`${styles.footer} flex items-center justify-center mt-72 h-52`}>
    <p className={`${styles.text}`}>
        Author: Philippe Neri Singinzwa
    </p>
    </footer>
  )
}

export default Footer