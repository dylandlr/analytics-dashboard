import React from "react";

// in order to create functional components in React, you need to define the props that the component will receive from its parent component

interface BtnProps {
  // interface for the Btn component works by defining the props that the component will receive from its parent component, in this case the text and onClick function
  text: string; // text is set to a string type in the interface which is passed in as a prop to define the display text of the button
  onClick: () => void; // onClick is set to a function that returns void in the interface which is passed in as a prop to define the function that will be called when the button is clicked
  icon?: React.ReactNode; // icon is set to a React node in the interface which is passed in as a prop to define the icon that will be displayed on the button
}

const Btn = ({ text, onClick, icon }: BtnProps) => {
  // component function with props passed in as an argument
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-secondary text-white btn btn-primary">
      {icon && <span className="mr-2">{icon}</span>}
      {!icon && text}
    </button>
  );
};

export default Btn;
