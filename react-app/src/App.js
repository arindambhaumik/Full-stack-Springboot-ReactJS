import { BrowserRouter,Routes,Route } from "react-router-dom";
import CreateProduct from "./FullstackDemo/CreateProduct";
import ProductHome from './FullstackDemo/ProductHome';
import NavbarResp from "./FullstackDemo/NavbarResponsive";
import Footer from './FullstackDemo/Footer';
import Home from "./FullstackDemo/Home";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
            <div>
            <NavbarResp />
                <Routes>
                   <Route exact path="/" element={<Home />} />
                   <Route path='/product' element={<ProductHome />} /> 
                   <Route path='/createProduct' element={<CreateProduct />} />
                   <Route path='/updateProduct/:id' element={<CreateProduct />} />
                </Routes>
            </div>
            <br/><br/>
            <Footer />
        </BrowserRouter>
        </div>
    );
}
 
export default App;