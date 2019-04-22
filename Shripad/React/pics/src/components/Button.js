import React from 'react';

class Child extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    console.log(this.props.text);
    this.props.onClick(["one", "Child to Parent Message !"]
      // {
      //   data:"haha",
      //   name: "Shripad"
      // });
    );
    // console.log("Button.js");
  };

  render() {
  
        return(
        <button onClick={this.handleClick}>Search
        </button>

        );

  }
}
export default Child;