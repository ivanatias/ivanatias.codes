import React from "react";
import { Navbar, Header, Footer } from "../../components";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 max-w-3xl px-5 mx-auto">
        {router.pathname !== "/404" && router.pathname !== "/500" && <Header />}
        {children}
      </main>
      {router.pathname !== "/404" && router.pathname !== "/500" && <Footer />}
    </>
  );
};

export default Layout;
