export const Input = ({type, id, placeholder, value, setValue, label}) =>{
    return (
    <>
        <label className="title four black" htmlFor={id}>{label}</label>
        <input type={type} name={id} id={id} placeholder={placeholder} value={value} onChange={(event) => {(type === 'number' ? setValue(parseFloat(event.target.value)): setValue(event.target.value))}}/>
    </>
    )
}