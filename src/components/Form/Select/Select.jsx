export const Select = ({ children, value, setType }) => {
    return (
        <select value={value} onChange={(event)=>{setType(event.target.value)}}>
            <option value="" >Selecione o tipo de valor</option>
            {children}               
        </select>
    )
}