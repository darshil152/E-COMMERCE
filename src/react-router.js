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
<<<<<<< HEAD
import Register from "./register";
import Table from "./table";
=======
import Producttable from "./producttable";
>>>>>>> e72269d0664629ba1dcda6ba779eee31f23f3a74


export default function ReactRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}> </Route>
                <Route path="/register" element={<Register />}> </Route>
                <Route path="/table" element={<Table />}> </Route>
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

