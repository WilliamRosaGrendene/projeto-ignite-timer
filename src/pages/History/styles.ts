import styled from "styled-components";

export const HistoryContainer = styled.div`
    flex: 1;
    padding: 3.5rem;
    
    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.5rem;
        color: ${(props) => props.theme["gray-100"]};
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;
    }

    th{
        background-color: ${(props) => props.theme["gray-600"]};
        padding: 1rem;
        text-align: left;
        color: ${(props) => props.theme["gray-100"]};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child{
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
        }
        &:last-child{
            border-top-right-radius: 8px;
            padding-right: 1.5rem;
        }
    }

    td{
        background-color: ${(props) => props.theme["gray-700"]};
        border-top: 4px solid ${(props) => props.theme["gray-800"]};
        padding: 1rem;
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child{
            width: 50%;
            padding-left: 1.5rem;
        }
        &:last-child{
            padding-right: 1.5rem;
        }
    }
`

//styled-components - estilizações que são feitas dentro das propriedades(interface status_colors) 
//styled-components - tadução, componentes estilizados

interface StatusProps{
    _statusColor: keyof typeof status_colors
    // OU _statusColor: 'yellow' | 'red' | 'green'
}

//variavel status_colors recebe as propriedades com cores/valores pré determinados
const status_colors = {
    yellow: 'yellow-500',
    green: 'green-500',
    red:'red-500'
} as const

//Variavel/componente Status, onde vai conter os estilos CSS, ele pode receber as propriedades <StatusProps>
//styled.span - qual elemento do html que vai ser estilizado e quando eu importar em algum componente a variavel já vai a info de button + o css
export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before{
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
//$ {} interpolação, styled-components executa como uma função, ele envia todas as propriedades(props)
//Essa interpolação gera uma função que pega a variavel status_colors que contem as tipagens com estilos e envia para o componente 
//_statusColor propriedade que é chamada no index contendo a info das cores
        background: ${(props) => props.theme[status_colors[props._statusColor]]};
    }
`