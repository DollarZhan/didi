import React, { Component} from 'react';
import './App.css';
import Home from "./components/Home";


class App extends Component {
  render() {
   return(
    <div className="veryBig">
          <section>
            {this.props.children}
          </section>


    </div>
      )
  }

  

}

export default App;
