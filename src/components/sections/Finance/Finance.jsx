import { useState } from "react"
import { Form } from "../../Form/FullForm/FullForm"
import { ResultMoney } from "./ResultMoney/ResultMoney"
import { ListCard } from "./ListCard/ListCard"
export const Finance = ()=>{
    const [moneyList, setList] = useState([])
    
    const addMoney = (dataForm)=>{
        const add = {...dataForm}
        setList([...moneyList, add])
    }

    const deleteMoneyList = (uuid)=>{
        const deleteItemList = moneyList.filter(money =>{
            return money.uuid != uuid 
        })
        setList(deleteItemList)
    }

    return (
        <>
            <div>
                <Form addMoney={addMoney}/>
                <ResultMoney moneyList={moneyList}/>
            </div>
                <ListCard listMoney={moneyList} deleteMoneyList={deleteMoneyList}/>
        </>
    )
}