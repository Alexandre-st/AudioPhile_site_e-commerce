import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
