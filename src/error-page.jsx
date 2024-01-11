import { useRouteError } from "react-router";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header></Header>
      <div id="contentWrapper" className="container">
        <div id="errorPage">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
