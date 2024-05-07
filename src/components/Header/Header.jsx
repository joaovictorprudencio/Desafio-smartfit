import styles from "./Header.module.css"
import Logo from "./logo.svg"
function Header(){
return(
    <div >
      <header className={styles.corpo}>
        <img src={Logo} alt="smartfit" />
      </header>
    </div>
)
}

export default Header