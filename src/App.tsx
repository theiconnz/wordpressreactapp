import React, {useState, useEffect} from "react";
import {BrowserRouter, useNavigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/partial/header";
import Footer from "./components/partial/footer";
import NavigationRoutes from "./components/partial/navigation_routes";
import AOS from 'aos';
import {useDispatch, useSelector} from "react-redux";
import {setMenulist} from "./components/store/common";
import Common from "./components/lib/common"

import 'aos/dist/aos.css'; // You can also use <link> for styles


// Import our custom CSS
import './scss/styles.scss'
import {initDataLoader} from "./components/store/dataload";
AOS.init();

function App() {
    const dispatch = useDispatch();
    // @ts-ignore
    const isLoaded = useSelector((store) => store.initdata.isLoaded);
    // @ts-ignore
    const menulist = useSelector((store) => store.commonstate.menuslist);
    // @ts-ignore
    const initdata = useSelector((store) => store.initdata.initdataload);
    const [dataloaded, setDataloaded] = useState(isLoaded);


    useEffect(() => {
        if(!isLoaded) {
            dispatch(initDataLoader());
        }
        setDataloaded(isLoaded);
        if(isLoaded && menulist.length==undefined){
            const common = new Common({});
            const menurender = common.createMenus(initdata.menus);
            dispatch(setMenulist(menurender));
        }
    }, [dispatch, isLoaded])

  return (
      <HelmetProvider>
          {!dataloaded && (
              <div id={"profile-ecommerce"} className={"profile d-flex flex-column align-items-center justify-content-center flex-column col-12 " +
              " mb-4"} >
                  Loading...
              </div>
          )}

          {dataloaded && (
              <BrowserRouter>
                <Header />
                  <main>
                    <NavigationRoutes />
                  </main>
                <Footer />
              </BrowserRouter>
          )}
      </HelmetProvider>
  );
}

export default App;
