import { Play } from "phosphor-react";
import { Header } from "../../components/Header";
import { CountdowContainer, FormContainer, HomeContainer, MinutesAmauntInput, Separator, StartCountdowButton, TaskInput } from "./styles";


export function Home(){
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>

                    <label htmlFor="task">Vou trabalhar em</label>

                    <TaskInput 
                        id="task" 
                        list="taskSuggestions"
                        placeholder="Dê um nome para o seu projeto"
                    />
                    <datalist id="taskSuggestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Projeto 4"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmauntInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                    />

                    <span>minutos.</span>

                </FormContainer>

                <CountdowContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdowContainer>

                <StartCountdowButton disabled type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdowButton>
            </form>
        </HomeContainer>
    );
}