import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // creating state object
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const {count} = this.state

    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button onClick={()=>
          {
            this.setState({
              count: this.state.count + 1
            });
          }
        } >Count Increase</button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @Naveen57</h4>
      </div>
    );
  }
}

export default UserClass;
