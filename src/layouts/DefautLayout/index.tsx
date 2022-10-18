//<Outlet/> Componente que faz o conteudo entre as paginas alterarem, e o header manter fixo,
//sem ser carregado novamente

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefautLayout(){
    return(
        <div>
            <LayoutContainer>
                <Header/>
                <Outlet/> 
            </LayoutContainer>
        </div>
    );
}