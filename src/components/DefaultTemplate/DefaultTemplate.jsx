import { Header } from "../Header/Header"
import  Style  from "./style.module.scss"

export const DefaultTemplate = ({children}) =>{
    return(
    <>
        <Header />
        <main className="container">
            {children}
        </main>
    </>
    )
}