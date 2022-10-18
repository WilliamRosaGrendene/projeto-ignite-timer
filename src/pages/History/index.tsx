import { HistoryContainer, HistoryList, Status } from "./styles";


export function History(){
    return(
        <HistoryContainer>
            
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status _statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status _statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status _statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status _statusColor='red'>Interrompido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status _statusColor='yellow'>Em andamento</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
            
        </HistoryContainer>
    );
}