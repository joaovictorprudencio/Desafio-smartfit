import  mascaraObri from "./imagens/required-mask.png"
import toalha_ok from "./imagens/VERDETOALHA.png"
import imagem from "./imagens/PARCIALAGUA.png"
import vestiarioProibido from "./imagens/vestiarioNAO.png"

import style from "./Retorno.module.css"
function Retorno (){
return(
<div className={style.corpo} >
    <div className={style.container} >
        <h3 className={style.status}>Aberto</h3>
        <h2 className={style.rua}>DOM Severino</h2>
        <p className={style.endereço}>Av. Santos Dumont, 1733 - Papicu <br/> Fortaleza, CE</p>
        <div className={style.imagens}>
            <img src={mascaraObri} alt="" />
            <img src={toalha_ok} alt="" />
            <img src={imagem} alt="" />
            <img src={vestiarioProibido } alt="" />
        </div>
        <div className={style.horarios} >
            <p><b>Seg. à Sex:</b> 06h às 22h</p>
            <p><b>Sáb:</b> Fechada</p>
            <p><b>Domingo:</b> Fechada</p>
        </div>    
     </div> 
     <div className={style.container} >
        <h3 className={style.status}>Aberto</h3>
        <h2 className={style.rua}>Shopping Rio Mar</h2>
        <p className={style.endereço}>Rua. Lauro Nogueira, 1733 - Papicu <br/> Fortaleza, CE</p>
        <div className={style.imagens}>
            <img src={mascaraObri} alt="" />
            <img src={toalha_ok} alt="" />
            <img src={imagem} alt="" />
            <img src={vestiarioProibido } alt="" />
        </div>
        <div className={style.horarios} >
            <p><b>Seg. à Sex:</b> 06h às 22h</p>
            <p><b>Sáb: </b>10h às 23h</p>
            <p><b>Domingo:</b> Fechada</p>
        </div>    
     </div> 
 
         
         
        
        

   
</div>
)
}
export default Retorno