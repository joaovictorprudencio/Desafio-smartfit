import styles from "./Mensagem.module.css"
function Mensagem(){
return(
    <div className ={styles.reabertua}>
        
        <h1 className ={styles.cima}>
            REABERTUDA 
        </h1>
        <h1 className ={styles.cima}>
            SMARTFIT
            <p className ={styles.preto}></p>
        </h1>

    <div>
        <p className ={styles.mensagem1}>
            O horario de funcionamento das nossas unidades está seguindo os decretos de cada municipio. Por isso confira aqui
        </p> 

        <p className ={styles.mensagem2}>
            se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
        </p>
    </div>

    </div>
)
}
 export default Mensagem