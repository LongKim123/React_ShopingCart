import React,  { Component } from "react";
import Header from './component/Header';
import Products from './component/Products';
import Message from './component/Message';
import Cart from './component/Cart';
import Footer from './component/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';


class App extends Component{

render (){
  return(
    <div>
    <Header></Header>
        
        
        <main id="mainContainer">
            <div className="container">
                
               <ProductsContainer/>
                
               <MessageContainer/>
               <CartContainer/>
                
               </div>
        </main>
        <Footer/>
       </div>
  ) ;
}

}
export default App;
