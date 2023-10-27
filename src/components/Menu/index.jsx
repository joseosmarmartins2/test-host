import * as Styled from './styled'
import { useNavigate } from 'react-router-dom-v5-compat';

function Menu() {
    const navigate = useNavigate()

    function handleClick(path) {
        navigate(path);
    }

    return <Styled.Menu>
        <div>
            <Styled.Item>
                <span class="material-icons md-48" onClick={() => handleClick("/shopee")}>storefront</span>
            </Styled.Item>
            <Styled.Item>
                <span class="material-icons md-48" onClick={() => handleClick("/fatura")}>paid</span>
            </Styled.Item>
            <Styled.Item>
                <span class="material-icons md-48" onClick={() => handleClick("/empresa")}>apartment</span>
            </Styled.Item>
        </div>
    </Styled.Menu>
}

export default Menu;
