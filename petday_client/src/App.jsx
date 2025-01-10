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
import { VetsAdmin } from "./pages/VetsAdmin";
import { GrommersAdmin } from "./pages/GrommersAdmin";
import { GrommerApp } from "./pages/GrommerApp";
import axios from "axios";
import { useAppStore } from "./store";
import GuardedRoute from "./components/GuardedRoute";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080"

axios.default.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {

    if (error.status === 401) {
      const logout = useAppStore.getState().logout;

      logout()
    }

    throw new Error(error)
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
        <Route path="/home1" element={
          <GuardedRoute>
            <Home1 />
          </GuardedRoute>
        } />
        <Route path="/addpet" element={
          <GuardedRoute>
            <AddPet />
          </GuardedRoute>
        } />
        <Route path="/petupdate" element={
          <GuardedRoute>
            <UpdatePet />
          </GuardedRoute>
        } />
        <Route path="/vets" element={
          <Vets />
        } />
        <Route path="/grommers" element={<Grommers />} />
        <Route path="/vetapp" element={<VetApp />} />
        <Route path="/grommerapp" element={<GrommerApp />} />
        <Route path="/vetsadmin" element={<VetsAdmin />} />
        <Route path="/grommersadmin" element={<GrommersAdmin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
