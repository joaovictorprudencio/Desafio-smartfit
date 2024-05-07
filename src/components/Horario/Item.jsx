import style from "./Item.module.css"
import Hora from  "./hora.png"

function Item() {

return(
    <div className={style.hora}>
        <img src={Hora} className={style.imagem_hora}/>
         <p className={style.horario}>Horário</p>
         <br/>
    </div>
 )

}
export default Item