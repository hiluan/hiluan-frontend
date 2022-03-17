import { HiOutlineMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { isMenuActiveAction } from "../store/isMenuActiveAction";

const MenuButton = () => {
  const dispatch = useDispatch();
  const mobileMenuStatus = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );
  const handlerToggleMenu = () => {
    dispatch(isMenuActiveAction(!mobileMenuStatus));
  };
  return (
    <a onClick={handlerToggleMenu} id="menu-mobile">
      <HiOutlineMenu id="menu-button" />
    </a>
  );
};

export default MenuButton;
