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
import Register from "./register";
import Table from "./table";
import Producttable from "./producttable";
import Shoes from "./shoes";


export default function ReactRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}> </Route>
                <Route path="/register" element={<Register />}> </Route>
                <Route path="/table" element={<Table />}> </Route>
                <Route path="/admin" element={<Admin />}> </Route>
                <Route path="/producttable" element={<Producttable />}> </Route>
                <Route path="/addproduct/:id" element={<Addproduct />}> </Route>
                <Route path="/addproduct" element={<Addproduct />}> </Route>
                <Route path="/main" element={<Main />}> </Route>
                <Route path="/tshirt" element={<Tshirt />}> </Route>
                <Route path="/cart" element={<Cart />}> </Route>
                <Route path="/shoes" element={<Shoes />}> </Route>
                {/* <Route path="/show" element={<Showproduct />}> </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

