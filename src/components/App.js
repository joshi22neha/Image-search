import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  /*onFormSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
        params : {
            query : term
        },    
        headers : {
                Authorization: 'Client-ID hzVchlXIPnE4s0zON35NIOZjG2ztWTgip7gk-9-ZtK8'
            }
        });
    }*/

  /*onFormSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
        params : {
            query : term
        },    
        headers : {
                Authorization: 'Client-ID hzVchlXIPnE4s0zON35NIOZjG2ztWTgip7gk-9-ZtK8'
            }
        });

        
        this.setState({images: response.data.results });
    }*/

  //cleaning up the code little bit or creating custom clients

  onFormSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar callOnSubmit={this.onFormSubmit} />
        Found : {this.state.images.length} results
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
