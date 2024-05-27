// the home page of the app
import React from "react";
import Btn from "../components/Btn";
import DarkModeBtn from "../components/DarkModeBtn";

const Home = () => {
  return (
    <>
      <Btn
        text={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <DarkModeBtn />
    </>
  );
};

export default Home;
