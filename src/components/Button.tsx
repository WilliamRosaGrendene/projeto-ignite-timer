// import { ButtonContainer, ButtonVariantColor } from "./Button.styles";

// //ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtoProps{
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button({variant = 'primary'}:ButtoProps){
    return(
        <h1>teste</h1>
//estou chamando o button que foi criado no Button.styles, nele contem o elemento button + a aplicação do css
//_variant propriedade que estou chamando do Button.styles para aplicar o estilo na propriedade do Button.tsx(variant) 
        //<ButtonContainer _variant={variant}>Enviar</ButtonContainer>
    )
}