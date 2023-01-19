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
import Wishlist from "./wishlist";
import Trending from "./Trending";
import Forgotpass from "./forgotpass";
import Sneaker from "./sneaker";
import Order from "./order";
import View from "./view";
import Header2 from "./header2";
import New from "./new";
import Cartcontext from "./cartcontext";
import Upcomming from "./upcomming";
import Upcommingview from "./upcommingview";
import View1 from "./view1";
import Data from "./Data";
import Sample from "./Sample";
import Navbar from "./Navbar";
import Checkout from "./Checkout";




export default function ReactRouter() {
    return (
        <BrowserRouter>
         <Navbar/>
            <Routes>
                <Route path="/" element={<Login />}> </Route>
                <Route path="/register" element={<Register />}> </Route>
                <Route path="/table" element={<Table />}> </Route>
                <Route path="/new" element={<New />}> </Route>
                <Route path="/admin" element={<Admin />}> </Route>
                <Route path="/producttable" element={<Producttable />}> </Route>
                <Route path="/addproduct/:id" element={<Addproduct />}> </Route>
                <Route path="/addproduct" element={<Addproduct />}> </Route>
                <Route path="/main" element={<Main />}> </Route>
                <Route path="/tshirt" element={<Tshirt />}> </Route>
                <Route path="/wishlist" element={<Wishlist />}> </Route>
                <Route path="/cart" element={<Cart />}> </Route>
                <Route path="/shoes" element={<Shoes />}> </Route>
                <Route path="/trending" element={<Trending />}> </Route>
                <Route path="/sneaker" element={<Sneaker />}> </Route>
                <Route path="/forgot" element={<Forgotpass />}> </Route>
                <Route path="/cartcontext" element={<Cartcontext />}> </Route>
                <Route path="/order" element={<Order />}> </Route>
                <Route path="/Header2" element={<Header2 />}> </Route>
                <Route path="/data" element={<Data />}> </Route>
                <Route path="/order/:id" element={<Order />}> </Route>
                <Route path="/view/:id" element={<View />}> </Route>
                <Route path="/upcomming" element={<Upcomming />}> </Route>
                <Route path="/sample" element={<Sample />}> </Route>
                <Route path="/upcommingview" element={<Upcommingview />}> </Route>
                <Route path="/view1/:id" element={<View1 />}> </Route>
                <Route path="/checkout" element={<Checkout />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}