import style from "./Card.module.css"
import Item from "./Item"
import levarAgua from "./assets/PARCIALAGUA.png"
import toalha_parcial from "./assets/recomendadoToalha.png"
import toalha_ok from "./assets/VERDETOALHA.png"
import maskOK from "./assets/required-mask.png"
import Maskrecomendado from "./assets/recommended-mask.png"
import semBebedouro from "./assets/SEMAGUA.png"
import vestiarioNo from "./assets/vestiarioNAO.png"
import vestiarioReco from "./assets/RoupaParcial.png"
import vestiarioOk from "./assets/vestiarioOK.png"
function Card(){
  return(
    <div className={style.Card}>
  <Item
  nome ="Mascara"
  imagemOk={maskOK} 
  imagemParcial={Maskrecomendado} 
  status1 ="Obrigatorio"
  status2="Recomendado"
  />
  <Item
   nome="Toalha" 
   imagemOk={toalha_ok} 
   imagemParcial={toalha_parcial}
   status1 ="Obrigatorio"
  status2="Recomendado"
  /> 
   <Item
   nome="Bebedouro" 
   imagemOk={levarAgua} 
   imagemParcial={semBebedouro}
   status1 ="Parcial"
  status2="Proíbido"
  /> 

   <div className={style.item}>
      <p className={style.nome}><b>vestiário</b></p>
      <div className={style.flex}>
           <div>
               <img className={style.normal} src={vestiarioOk} alt=""/>
                <p className={style.sumario}>Liberado</p>
           </div>
       
        
         <div>
            <img className={style.normal} src={vestiarioReco} alt="" />
          <p className={style.sumario}>Parcial</p>
         </div>
        
         <div>
            <img className={style.normal} src={vestiarioNo} alt=""/>
          <p className={style.sumario}>Proibido</p>
    
         </div>
      
        
      
      </div>   
    </div>  

 

       
  </div>
  )
}
export default Card