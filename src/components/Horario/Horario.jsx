import style from "./Horario.module.css"
import Item from "./Item"
import Horarios from "./Horarios/Horarios"
import Botao from "./Botão/Botao"

function Horario(){
  return( 
     <div className={style.corpo}>
     <Item/>
     <div>      
        <p className={style.periodo}>Qual período quer treinar?</p>     
        <h2 className={style.cinza}></h2>        
        <Horarios periodo="Manhã" horario="06:00 ás 12:00"/>
        <h2 className={style.cinza}></h2>  
        <Horarios periodo="Tarde" horario="12:01 ás 18:00"/>
       <h2 className={style.cinza}></h2>  
       <Horarios periodo="Noite" horario="18:01 ás 23:00"/>
       <h2 className={style.cinza}></h2> 
       <div className={style.pergunta}>
         <input type="checkbox" />
         <p>exibir unidades fechadas</p>
         </div>
       <Botao/>
    </div>
  </div>
 )
}
export default Horario