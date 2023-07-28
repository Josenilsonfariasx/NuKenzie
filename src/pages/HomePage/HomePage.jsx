import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate"
import { Finance } from "../../components/sections/Finance/Finance"

export const HomePage = () =>{
    return (
        <DefaultTemplate>
            <Finance />
        </DefaultTemplate>
    )
}