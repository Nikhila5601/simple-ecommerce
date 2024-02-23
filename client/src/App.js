import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
// import Tab from "./components/demo/Tab";
import Header from "./components/header/Header";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Form />
                {/* <Tab /> */}
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
