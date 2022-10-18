import { HeaderContainer } from "./styles";
import {Timer, Scroll} from "phosphor-react";

import logoIgnite from "../../assets/logo-ignite.svg";
import { NavLink } from "react-router-dom";

export function Header(){
    return(
//HeaderContainer componete criado na styles, todos as infos que estiverem dentro desse componete, 
//vão ser aplicados os estilos
        <HeaderContainer>
            <img src={logoIgnite}/>
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}