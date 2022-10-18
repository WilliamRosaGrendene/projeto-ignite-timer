//styled-components - estilizações que são fetas dentro das propriedades(interface ButtonContainerProps) 
//styled-components - tadução, componentes estilizados

import styled from "styled-components";

//Variavel/componente LayoutContainer, onde vai conter os estilos CSS, ele pode receber as propriedades <ButtonContainerProps>
//styled.button - qual elemento do html que vai ser estilizado e quando eu importar em algum componente a variavel já vai a info de button + o css
export const LayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    background: ${(props) => props.theme["gray-800"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`