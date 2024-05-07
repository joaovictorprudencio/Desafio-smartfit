import style from "./Horarios.module.css"

function Horarios({periodo, horario}){
return(
    <div>
       <div className={style.item}>
        <input className={style.input} type="checkbox" name="" id="" />
        <p className={style.periodo}>{periodo}</p>
        <p className={style.horario}>{horario}</p>
       </div>
    </div>
)
}

export default Horarios