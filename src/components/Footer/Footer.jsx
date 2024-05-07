import imagem from "./logo.svg"
import style from "./Footer.module.css"
function Footer(){
return(
    <div className={style.footer}>
        <img src={imagem} alt="" />
        <p className={style.mensagem}>@SmartFit</p>
       
    </div>
)
}
export default Footer