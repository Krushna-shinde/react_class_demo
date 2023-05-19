import { Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
class App extends Component{
  render(){
    return (<>
<Header/>
<Content/>
<Footer/>
    </>
    )
  }
}
export default App;
