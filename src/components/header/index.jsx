import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Reducer
import UserActionTypes from "../../redux/user/action-types";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);


  // Fazendo um destructuring com {} para pegar as partes do retorno
  // chamo rootReducer e retorno rootReducer.
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  console.log({currentUser});

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch({
      // type: 'user/login',
      type: UserActionTypes.LOGIN,
      payload: {
        name: 'Daniel Figueiredo',
        login: 'daniel.figueiredo',
      }
    })
  }

  const handleLogoutClick = () => {
    dispatch({
      // type: 'user/login',
      type: UserActionTypes.LOGOUT,
    })
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : <div onClick={handleLoginClick}>Login</div>}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart $isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
