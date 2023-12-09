import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import "./assets/sass/app.scss";
import { CartProvider } from "./layouts/CartContext";

function App(){
  return(
    <CartProvider>
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    </CartProvider>
  );
}
export default App;