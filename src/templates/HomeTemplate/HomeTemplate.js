import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

const HomeTemplate = ({ component: Component, exact, path, ...restRoute }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...restRoute}
      render={(propsRouter) => {
        return (
          <>
            <Header {...propsRouter} />
            <HomeCarousel {...propsRouter} />
            <Component {...propsRouter} />
            <Footer />
          </>
        );
      }}
    />
  );
};

export default HomeTemplate;
