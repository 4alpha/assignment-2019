import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Child from "./Button";
import Ref from "./Ref"
class App extends React.Component {
  state = { images: [], text: "Welcome from Parent to Child" };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
    console.log(response);
  };

  handleClickParent = data => {
    alert(data[1]);
    // console.log("App.js");
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Child text={this.state.text} onClick={this.handleClickParent} />
        <ImageList images={this.state.images} />
        <br/>
        <Ref />
      </div>
    );
  }
}

export default App;
