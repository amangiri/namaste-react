import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("About constructor");
  }

  render() {
    // console.log("About render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react dev series.</h2>
        {/* <User name={"Aman Giri"} location={"Delhi"} contact={"@amangiri18"} /> */}
        <UserClass
          name={"Akshay Saini"}
          location={"Banguluru"}
          contact={"@akshaymarch"}
        />
        {/* <UserClass
          name={"Aman Giri"}
          location={"Delhi"}
          contact={"@amangiri_18"}
        /> */}
      </div>
    );
  }
  componentDidMount() {
    // console.log("parent componentDidMount");
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react dev series.</h2>
//       {/* <User name={"Aman Giri"} location={"Delhi"} contact={"@amangiri18"} /> */}
//       <UserClass name={"Aman Giri"} location={"Delhi"} contact={"@amangiri_18"} />
//     </div>
//   );
// };

export default About;
