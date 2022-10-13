//styled-components - estilizações que são fetas dentro das propriedades(interface ButtonContainerProps) 
//styled-components - tadução, componentes estilizados
import styled, {css} from "styled-components";

export type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success';//variavel de tipagem 

interface ButtonContainerProps{
    _variant: ButtonVariantColor
}

//variavel buttonVariants recebe as propriedades com cores/valores pré determinados
const buttonVariants ={
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
};

//Variavel/componente ButtonContainer, onde vai conter os estilos CSS, ele pode receber as propriedades <ButtonContainerProps>
//styled.button - qual elemento do html que vai ser estilizado e quando eu importar em algum componente a variavel já vai a info de button + o css
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width:100px;
    height:40px;

//$ {} interpolação, styled-components executa como uma função, ele envia todas as propriedades(props)
//Essa interpolação gera uma função que pega a variavel buttonVariants que contem as tipagens com estilos e envia para o componente 
//ButtonContainer que está sendo chamado no Button.tsx...
${props =>{
    return css`
    background-color:${buttonVariants[props._variant]}
    `
}}

`

