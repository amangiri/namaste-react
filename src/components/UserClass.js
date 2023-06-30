import React from "react";
import { GITHUB_PROFILE_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo:{
        name:"Lorem Ipsum",
        location: "Lorem Ipsum",
        avatar_url:""
      }
    };
    console.log(this.props.name,"child constructor");
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const data= await fetch(GITHUB_PROFILE_URL);
    const json= await data.json();
    console.log(json);
    this.setState({
      userinfo:json
    })
  }

  render() {
    // const { name, location, contact } = this.props;
    const {name,location,avatar_url}= this.state.userinfo;
    console.log("child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>

        {/* <h4>Contact: {contact}</h4> */}
      </div>
    );
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

 
}

export default UserClass;

/****
 * ----MOUNTING----
 * 
 * Constructor (dummy)
 * Render (dummy)
 *    HTML dummy
 * component Did mount
 *    Api call
 *    set state-> state variable is updated
 * 
 * ----UPATE----
 *        render api data
 *        HTML new api data
 * 
 * component did update
 */