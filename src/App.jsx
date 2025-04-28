import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./Components/Body";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AdminLogin from "./Components/AdminLogin";
import ServicePage from "./Components/ServicePage";
import Admin from "./Components/Admin";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import AboutCompany from "./Components/AboutCompany";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about/company" element={<AboutCompany />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
