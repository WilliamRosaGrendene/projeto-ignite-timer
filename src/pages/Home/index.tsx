import { Play, Watch } from "phosphor-react";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod" //biblioteca de validação
import * as zod from "zod"
import { CountdowContainer, FormContainer, HomeContainer, MinutesAmauntInput, Separator, StartCountdowButton, TaskInput } from "./styles";
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmaut: zod.number().min(5).max(60),
})

//typeof converte o javaScript para o JS, fazer isso quando quero referenciar o JS no TS
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

//Formato de cada ciclo da aplicação
interface Cycle{
    id: string //para identificar o ciclo que foi gerado
    task: string
    minutesAmaunt: number
    isActive: boolean //Controla se o cliclo está ativo sim/não
}

export function Home(){

//useState permite criar estados em um componente criado a partir de uma função
// Estado que armazena o ciclo do processo do timer.. armazena uma lista de ciclos <Cycle[]> 
const [cycles, setCycles] = useState<Cycle[]>([])
const[activeCycleId, setActiveCycleId] = useState<string | null>(null)//Estado que armazena o Id do ciclo ativo

const[amountSecondsPassed, setamountSecondsPassed] = useState(0) //Estado que armazena os segundos que passaram desde que o ciclo foi ativado

    const { register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task:'',
            minutesAmaut: 0,
        }
    })

    //função que gera o ciclo do timer, sempre vai ter um ciclo ativo por momento
    function handleCreateNewCycle(data:NewCycleFormData){
        const newCycle: Cycle ={
            id: String(new Date().getTime()), //foi utilizado a data em mili segundos, pois o valor nunca vai se repetir
            task: data.task, //adiciona os dados dentro digitados dentro de task
            minutesAmaunt: data.minutesAmaut, //adiciona os dados dentro digitados dentro de minutesAmaunt
        }
        setCycles((state) => [...state, newCycle]) //Pego o estado atual e adiciono os novos valores

        setActiveCycleId(newCycle.id)//seta o ciclo recem criado, como sendo o Id do ciclo ativo
        reset()
    }
    
    //variavel que mostra o ciclo ativo na tela, com base no ID do ciclo ativo, ela percore todos os ciclos existentes e retorna o 
    //ID do ciclo que está ativo para pegar as informações.. Funciona igual a formula do PROCV, pesquisa um valor(ID) dentro de uma coluna
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)// Tradução do percurso, ela vai percorer no estado cycle e vai encontrar um cycle.id igual ao id do ciclo ativo activeCycleId
    
    //Countdown
    //variavel Converte os minutos em segundos, se tiver um ciclo ativo, a variavel vai receber os minutos adicionado e vai fazer * 60, se não ele é 0
    const totalSeconds = activeCycle ? activeCycle.minutesAmaunt * 60 : 0
    //variavel se tiver um ciclo ativo, vai ser o total de segundos - quantos segundos já se passaram se não ele é 0
    const curruentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    //variavel calcula a partir do total de segundos, quantos minutos ainda restam. Math.floor metodo que arrendonda o valor para baixo
    const minutesAmount = Math.floor(curruentSeconds / 60)
    //variavel calcula quantos segundos ainda tem do resto da divisão
    const secondsAmount = curruentSeconds % 60

    //variavel que converte para string e o metodo .padStart preenche uma string com um x tamanho, como o exemplo
    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')
    
    // botão desabilitado, caso o usuario adicione um texto no input o botão é habilitado
    const task = watch('task')
    const isSubmitDisabled = !task

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>

                    <label htmlFor="task">Vou trabalhar em</label>

                    <TaskInput 
                        id="task" 
                        list="taskSuggestions"
                        placeholder="Dê um nome para o seu projeto"
                        {...register('task')}
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
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmaut', {valueAsNumber: true})}
                    />

                    <span>minutos.</span>

                </FormContainer>

                <CountdowContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdowContainer>

                <StartCountdowButton disabled={isSubmitDisabled } type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdowButton>
            </form>
        </HomeContainer>
    );
}