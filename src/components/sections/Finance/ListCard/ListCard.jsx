import { Card } from "../Card/Card"
import style from "./styles.module.scss";
export const ListCard = ({listMoney, deleteMoneyList})=>{
    console.log(listMoney.length)
    return (
        (listMoney.length !== 0 ? (
            <section className={style.section}>
                <div>
                    <h3 className="title two">Resumo Financeiro</h3>
                    <div>
                        <ul>
                        {listMoney.map((money) => (
                            <Card
                                description={money.description} value={money.value} type={money.type} key={money.uuid} deleteMoneyList={deleteMoneyList} uuid={money.uuid}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        ): 
        <>
            <div className={style.div}>
                <h3 className="title three">Resumo Financeiro</h3>
                <p className="title two">Você ainda não possui lançamento</p>
            </div>
        </>)
    )
}