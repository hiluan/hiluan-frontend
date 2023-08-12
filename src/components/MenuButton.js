import { VscClose } from "react-icons/vsc";
import { FcMenu } from "react-icons/fc";
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
      {mobileMenuStatus ? (
        <VscClose id="menu-button" />
      ) : (
        <FcMenu id="menu-button" style={{ color: "black" }} />
      )}
      {/* <span>open</span>
      <span>menu</span> */}
    </a>
  );
};

export default MenuButton;
