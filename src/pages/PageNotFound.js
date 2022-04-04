import { useSelector } from "react-redux";

const PageNotFound = () => {
  // const dispatch = useDispatch();
  const isMobileMenuActive = useSelector(
    (state) => state.ultilities.isMobileMenuActive
  );
  // useEffect(() => {
  //   dispatch(isIconActiveAction("404"));
  // }, [dispatch]);
  return (
    <section
      className={`page-home page-not-found fade ${
        isMobileMenuActive ? "page-inactive" : ""
      }`}
    >
      <h1>404</h1>
      <h1>Page Not Found</h1>
    </section>
  );
};

export default PageNotFound;
