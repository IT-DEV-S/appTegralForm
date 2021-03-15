import React from "react";
import Body from "./template/body";
import Footer from "./template/footer";
import Header from "./template/header";

const App = () => {
  return (
    <div className="body-background-gray">
      <div className=" body-background-white">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
