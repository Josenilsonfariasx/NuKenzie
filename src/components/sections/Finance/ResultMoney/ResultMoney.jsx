import style from "./styles.module.scss"

export const ResultMoney = ({moneyList}) =>{
    
    const balance = moneyList.reduce((amount, money) => {
        return money.type === "0" ? amount + money.value : amount - money.value;
    }, 0);

    return (
        <section className={style.section}>
            <div>
            {moneyList.length === 0 ? (
            <>
            </>
        ) : (
            <>
                <h3 className="title two"> Valor total: 
                    <p>{balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</p>
                </h3>
                <p className="paragraph">O valor se refere ao saldo</p>
            </>
        )}
            </div>
        </section>
    )
}