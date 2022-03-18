import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";
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
        <IoIosCloseCircleOutline id="menu-button" />
      ) : (
        <IoIosMenu id="menu-button" />
      )}
      {/* <span>open</span>
      <span>menu</span> */}
    </a>
  );
};

export default MenuButton;
