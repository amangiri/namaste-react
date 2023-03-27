import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> ReactElement -JS Object ==> HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"},"Namaste React");
// console.log(heading);

// JSX - is not HTML in JS. It is HTML like syntax.
// Creating react element using JSX.
// JSX (transpiled before it reaches the JS engine)- PARCEL - BABEL
// JSX =>Babel transiples it to React.createElement => ReactElement -JS Object ==> HTMLElement(render)

// React Element
const heading = <h1 className="head">Namaste React using JSX</h1>;

// React Component
// 1. Class based component - Old (nobody uses now)
// 2. Functional Component - NEW

// React Functional Component
const Title = () => <h1>Namaste React using JSX.</h1>;
const number = 10000;
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h2>{number}</h2>
      <h1 className="heading">Namaste react functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
