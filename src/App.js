import { CiWarning,CiMenuFries,CiUser,CiShop } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";

import Footer from "./components/Footer";
import { useState } from "react";

import './App.css';
import HamTitle from "./components/TitleHam/HamTitle";

function App() {
  const [menu, setMenu] =useState(false);
  const showMenu=()=>{
    setMenu(!menu)
  }
  
  
  return (
   <div>
   {menu && <HamTitle open={menu} setOpen={setMenu} />}
      {/* <nav className="main-nav "> */}
     {<>

      {/* !menu && */}
      {!menu && <nav className={"main-nav "+(!menu && "active")}>
        <div className="container_1">
            {/* {menu && <HamTitle open={menu} setOpen={setMenu} />} */}
          <div className="icon_1"><CiMenuFries style={{cursor:"pointer"}} onClick={showMenu} size='5rem' />
          </div>
        </div>

        <div className="heading">
            <div><a href="https://www.linkedin.com/company/gnsnalvero/" target="_blank">GNAL</a></div>
        </div>
        
          <li className={"Services " + (menu && "active")}><a href="https://www.linkedin.com/company/gnsnalvero/" target="_blank">Services</a></li>
          <li className={"Shop " +(menu && "active")}><a href="https://www.linkedin.com/company/gnsnalvero/" target="_blank">Shop</a></li>
             <div className="container_2">
                <div className="icon_2"><CiShop size='2rem'/></div>
            </div>
          <div className="container_3">
                <div className="icon_3"><CiUser size='2rem'/></div>
          </div>
       
      </nav>}
      
      
      <body className={menu && "bodycss"}>

        <div className="container">
          <div className="icon"><CiWarning size='4.5rem'/></div>
        </div>

        <div className='message'>
           We’re currently working on this page. We’ll be back with this feature soon. We really acknowledge your support & believe on us.
        </div>
        
        <div className='message_1'>
          VISIT OTHER SERVICES
        </div>

      </body>
     </>

      
     }

      <Footer />
    </div>


   

  );
}

export default App;
