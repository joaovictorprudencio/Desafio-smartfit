import React from 'react';
import style from './Item.module.css'; 

const ItemComponent = ({ nome, imagemOk, imagemParcial,status1,status2 }) => {
  return (
    <div className={style.item}>
      <p className={style.nome}><b>{nome}</b></p>
      <div className={style.flex}>
        <div className={style.alin}> 
          <img className={style.normal} src={imagemOk} alt="" />
          <p className={style.sumario}>{status1}</p>
        </div>
        <div>
          <img className={style.normal} src={imagemParcial} alt="" />
          <p className={style.sumario}>{status2}</p>
        </div>
      </div>   
    </div>
  );
}

export default ItemComponent;