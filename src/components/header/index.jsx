import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Actions User
import { loginUser, logoutUser } from "../../redux/user/actions";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  // Fazendo um destructuring com {} para pegar as partes do retorno
  // chamo rootReducer e retorno rootReducer.
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const productsCount = useSelector(selectProductsCount);

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // deriver data
  // const productsCount = useMemo(() => {
  //   return products.reduce((acc, curr) => acc + curr.quantity ,0);
  // })




  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser(loginUser(
      {
        name: 'Daniel',
        password: 123456,
      }
    )))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : <div onClick={handleLoginClick}>Login</div>}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
