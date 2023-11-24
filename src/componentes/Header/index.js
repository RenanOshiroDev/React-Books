import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader';  
import IconesHeader from '../iconesHeader';
import Styled from 'styled-components'

const HeaderContainer = Styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`
function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header