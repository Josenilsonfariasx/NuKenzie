import logo from "../../assets/Logo1.svg"
import style from "./style.module.scss"

export const Header = () =>{
    return (
        <header className={style.header}>
            <div className="container">
                <img src={logo} alt="Nu Kenzie" />
            </div>
        </header>
    )
}