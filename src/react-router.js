import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from './login';
import Header from "./header";
import Sidebar from "./sidebar";
import Admin from "./admin";
import Addproduct from "./addproduct";
import Main from "./main";
import Tshirt from "./Tshirt";
import Showproduct from "./showproduct";
import Cart from "./cart";
import Producttable from "./producttable";


export default function ReactRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}> </Route>
                <Route path="/admin" element={<Admin />}> </Route>
                <Route path="/producttable" element={<Producttable />}> </Route>
                <Route path="/addproduct" element={<Addproduct />}> </Route>
                <Route path="/main" element={<Main />}> </Route>
                <Route path="/tshirt" element={<Tshirt />}> </Route>
                <Route path="/show" element={<Showproduct />}> </Route>
                <Route path="/cart" element={<Cart />}> </Route>

            </Routes>
        </BrowserRouter>
    )

}

