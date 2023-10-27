import * as Styled from './styled'
import { useNavigate } from 'react-router-dom-v5-compat';

function Header() {
    const navigate = useNavigate()

    function handleClick() {
        navigate("/");
    }

    return (
        <Styled.Header>
            <div>
                <Styled.Logo onClick={handleClick}>LOGO AQUI</Styled.Logo>
            </div>
        </Styled.Header>
    );
}

export default Header;
