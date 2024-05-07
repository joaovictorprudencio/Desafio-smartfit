import style from "./Botao.module.css"

function Botao (){
    return(
        <div className={style.doisBotoes}>
            <button className={style.Botao1}>Encontrar unidade</button>
            <button className={style.Botao2}  >Limpar</button>
        </div>
    )
}
export default Botao