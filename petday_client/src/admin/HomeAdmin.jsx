import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const HomeAdmin = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [customer_id, setCustomerId] = useState("");

  const [userData, setUserData] = useState([]);

  // For Using Cors and JWT Token for axios its required
  axios.defaults.withCredentials = true;
  // Fetch user details

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Use a template string to dynamically insert customer_id
        const response = axios.get(`/user/vetcount`);
        const response1 = axios.get(`/user/usercount`);
        const response2 = axios.get(`/user/vetcount`);
        console.log(response);
        const counts = await Promise.all([response, response1, response2]);

        if (response.status === 200) {
          setAuth(true);
          setUserData(response.data); // Assuming the response contains an array or array-like structure
        } else {
          setAuth(false);
          setMessage(response.data.message || "Authorization failed.");
        }
      } catch (err) {
        setAuth(false);
        setMessage("An error occurred. Please log in again.");
        console.error(err);
      }
    };

    // Ensure customer_id is available before making the API call
    if (customer_id) {
      fetchUserData();
    }
  }, [customer_id]); // Add customer_id as a dependency

  const handleDelete = () => {
    axios
      .get("/userlogout")
      .then((res) => {
        location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body_wrap">
      <main>
        <section className="contact_section section_space_lg pb-0">
          <div className="container mx-auto" style={{ marginLeft: "10px" }}>
            <div className="section_space_lg pt-0 mt-5">
              <div className="row justify-content-center">
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <Link to="/admin/usersadmin">
                    <div className="item_content">
                      <h3 className="item_title">Users</h3>
                      <h3 className="item_title">12</h3>
                    </div>
                  </Link>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <Link to="/admin/vetsadmin">
                    <div className="item_content">
                      <h3 className="item_title">Vets</h3>
                      <h3 className="item_title">6</h3>
                    </div>
                  </Link>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <Link to="/admin/vetsadmin">
                    {" "}
                    <div className="item_content">
                      <h3 className="item_title">Grommers</h3>
                      <h3 className="item_title">4</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
