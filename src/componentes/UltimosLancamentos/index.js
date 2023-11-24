import {livros} from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import ImgCardRecomenda from '../../imagens/livro2.png'
import CardRecomenda from '../CardRecomenda'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px" alinhamento="center" >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt='Lançamentos'/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda 
            titulo = 'Talvez você se interesse...'
            subtitulo = 'Angular 11'
            descricao = 'Criando uma aplicação integrada com o GOOGLE!'
            img = {ImgCardRecomenda}
            />

        </UltimosLancamentosContainer>
        
    )
}


export default UltimosLancamentos