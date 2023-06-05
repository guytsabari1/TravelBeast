import info from '../data.json'
import usersInfo from '../usersData.json'
import { Context } from "./context/context";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import Hikes from "./components/Hikes/Hikes";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CartPage from "./components/CartPage/CartPage";
import HikeExtendedCard from "./components/HikeExtendedCard/HikeExtendedCard";
import Home from './components/Home/Home';
import Layout from "./components/Layout/Layout";
import MyCalender from './components/MyCalender/MyCalender'
import NoMatch from './components/NoMatch/NoMatch';
import PaymentBtn from './components/Payment/PaymentBtn';
import HelpfulLinks from './components/HelpfulLinks/HelpfulLinks';



function App() {

  const [data, setData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [savedUserChoises, setSavedUserChoises] = useState({});
  const [topNavName, setTopNavName] = useState(localStorage.getItem("loginName") || "User");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`${topNavName}Favorites`)) || [])
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem(`${topNavName}Events`))|| []);
  useEffect(() => {
    setData(info.results)
    setUsersData(usersInfo.userResults)
  }, [])
  
  return (

    <div>

      <Context.Provider value={{
        data, setData,savedUserChoises, setSavedUserChoises,usersData, setUsersData,
        topNavName, setTopNavName,cart,setCart,events,setEvents }}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<CartPage />}>
              <Route path="/cart/payment" element={<PaymentBtn/>}></Route>
            </Route>
            <Route path="/hikes" element={<Hikes />}></Route>
            <Route path="/hikes/:id" element={<HikeExtendedCard />}></Route>
            <Route path="/mycalender" element={<MyCalender />}></Route>
            <Route path='/help' element={<HelpfulLinks/>}></Route>
            <Route path="*" element={<NoMatch/>}></Route>
          </Route>
          
          
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
