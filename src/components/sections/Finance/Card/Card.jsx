import trash from "../../../../assets/trash.svg"
import style from "./styles.module.scss"
export const Card =({description, value, type, uuid, deleteMoneyList })=>{
    return (
        <li >
            <div className={(type==0 ? style.entrada : style.saida)}>
                <h2 className="title two">{description}</h2>
                <p className="paragraph">{(type == 0 ? "Entrada" : "Saida")}</p>
                <p className="title two">{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL',})}</p>
                <img src={trash} alt="apagar" onClick={(event)=>{
                    deleteMoneyList(uuid)
                }}/>
            </div>
        </li>
    )
}