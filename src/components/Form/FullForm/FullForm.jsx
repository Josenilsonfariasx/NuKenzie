import { useState } from "react"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"
import style from "./style.module.scss"

export const Form = ({addMoney}) =>{
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('')

    const submit = (event) => {
        event.preventDefault();
        addMoney({
            uuid: crypto.randomUUID(),
            description: description,
            value: value,
            type: type
        })
        setDescription("");
        setValue(0);
        setType("");
    };
    return (

            <form onSubmit={submit} className={style.form}>
                <div>
                <Input type={'text'} id={'description'} placeholder={'Digite aqui sua descrição'} value={description} setValue={setDescription} label={'Descrição: '}/>
                <Input type={'number'} id={'value'} placeholder={'Digite o valor '} value={value} setValue={setValue} label={'Valor (R$): '}/>
                
                <Select value={type} setType={setType}>
                    <option value="0">Entrada</option>
                    <option value="1">Saida</option>
                </Select>
                <button className="button" type="submit">Adicionar</button>
            </div>
            </form>
        
    )
}