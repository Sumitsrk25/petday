import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const GrommersAdmin = () => {
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
    axios
      .get("/user")
      .then((res) => {
        console.log("Response Data:", res.data); // Check if customer_id is present
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          setMobile(res.data.mobile);
          setCustomerId(res.data.customer_id); // Ensure this is set
          localStorage.setItem("customer_id", res.data.customer_id);
        } else {
          setAuth(false);
          setMessage(res.data.Error || "Error fetching user details.");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Use a template string to dynamically insert customer_id
        const response = await axios.get(`user/grommers/`);

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
          <div className="container">
            <div className="row">
              <div className="section_title">
                <h2 className="title_text">
                  <span className="sub_title">Pets</span> Grommers
                </h2>
              </div>
              {auth ? (
                <div className="row g-5">
                  {/* <div className="user-info mb-4">
                    <h4>Customer ID: {customer_id}</h4>
                    <h4>Name: {name}</h4>
                    <h4>Mobile: {mobile}</h4>
                  </div> */}
                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Location and City </th>
                        <th>Grommering Center</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(userData) && userData.length > 0 ? (
                        userData.map((user, index) => (
                          <tr key={index}>
                            <td>
                              {user.first_name} {user.last_name}
                            </td>
                            <td> {user.email}</td>
                            <td> {user.mobile}</td>
                            <td>
                              {user.location}, {user.city}
                            </td>
                            <td>{user.grooming_center_name}</td>
                            <td>
                              <i className="fa fa-pencil ms-2"></i>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <p>No user data found</p>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>
                  <h3>{message}</h3>
                  <h3>Login Now</h3>
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
