import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Home1 } from "./pages/Home1";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AddPet } from "./pages/AddPet";
import { UpdatePet } from "./pages/UpdatePet";
import { Vets } from "./pages/Vets";
import { Grommers } from "./pages/Grommers";
import { VetApp } from "./pages/VetApp";
import { VetsAdmin } from "./admin/VetsAdmin";
import { GrommersAdmin } from "./admin/GrommersAdmin";
import { GrommerApp } from "./pages/GrommerApp";
import { AppHistory } from "./pages/AppHistory";

import axios from "axios";
import { useAppStore } from "./store";
import GuardedRoute from "./components/GuardedRoute";
import { Error } from "./pages/Error";
import { AppHistoryAdmin } from "./admin/AppHistoryAdmin";
import { VetAdd } from "./admin/VetAdd";
import { VetUpdate } from "./admin/VetUpdate";
import { VetLogin } from "./pages/VetLogin";
import { Home1vet } from "./pages/Home1vet";
import { GrommerLogin } from "./pages/GrommerLogin";
import { Home1grommer } from "./pages/Home1grommer";
import { VaccineRecord } from "./pages/VaccineRecord";
import { VaccineAdd } from "./pages/VaccineAdd";
import { UsersAdmin } from "./admin/UsersAdmin";
import { UserPets } from "./admin/UserPets";
import { VaccineAdd1 } from "./admin/VaccineAdd1";
import { UserAppHistory } from "./admin/UserAppHistory";
import { HomeAdmin } from "./admin/HomeAdmin";
import { PetShop } from "./pages/Shop";
import { PetShopDetails } from "./ShopDetails";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080";

axios.default.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.status === 401) {
      const logout = useAppStore.getState().logout;

      logout();
    }

    throw new Error(error);
  }
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vetlogin" element={<VetLogin />} />
        <Route path="/grommerlogin" element={<GrommerLogin />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/home1"
          element={
            <GuardedRoute>
              <Home1 />
            </GuardedRoute>
          }
        />
        <Route
          path="/addpet"
          element={
            <GuardedRoute>
              <AddPet />
            </GuardedRoute>
          }
        />
        <Route
          path="/petupdate"
          element={
            <GuardedRoute>
              <UpdatePet />
            </GuardedRoute>
          }
        />
        <Route
          path="/homevet"
          element={
            <GuardedRoute>
              <Home1vet />
            </GuardedRoute>
          }
        />
        <Route
          path="/homegrommer"
          element={
            <GuardedRoute>
              <Home1grommer />
            </GuardedRoute>
          }
        />
        <Route
          path="/vaccinerecord"
          element={
            <GuardedRoute>
              <VaccineRecord />
            </GuardedRoute>
          }
        />
        <Route
          path="/vaccineadd"
          element={
            <GuardedRoute>
              <VaccineAdd />
            </GuardedRoute>
          }
        />
        <Route path="/admin/homeadmin" element={<HomeAdmin />} />
        <Route path="/vets" element={<Vets />} />
        <Route path="/grommers" element={<Grommers />} />
        <Route path="/vetapp" element={<VetApp />} />
        <Route path="/apphistory" element={<AppHistory />} />
        <Route path="/grommerapp" element={<GrommerApp />} />
        <Route path="/admin/vetsadmin" element={<VetsAdmin />} />
        <Route path="/admin/vaccineadd1" element={<VaccineAdd1 />} />
        <Route path="/admin/usersadmin" element={<UsersAdmin />} />
        <Route path="/admin/userpets" element={<UserPets />} />
        <Route path="/admin/userapphistory" element={<UserAppHistory />} />
        <Route path="/admin/grommersadmin" element={<GrommersAdmin />} />
        <Route path="/admin/apphistory" element={<AppHistoryAdmin />} />
        <Route path="/admin/vetadd" element={<VetAdd />} />
        <Route path="/admin/vetupdate" element={<VetUpdate />} />
        <Route path="/shop" element={<GuardedRoute>
          <PetShop />
        </GuardedRoute>} />

        <Route path="/shop_details" element={<GuardedRoute>
          <PetShopDetails />
        </GuardedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
