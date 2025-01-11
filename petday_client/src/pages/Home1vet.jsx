import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const Home1vet = () => {
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
    const fetchAppointments = async () => {
      try {
        if (!customer_id) return; // Ensure customer_id is available before calling

        const response = await axios.get(`/user/appbyvetid/${customer_id}`);
        console.log("Appointments Response:", response.data);

        if (response.status === 200) {
          setAuth(true);
          setUserData(response.data); // Update user data state
        } else {
          setAuth(false);
          setMessage(response.data.message || "Authorization failed.");
        }
      } catch (err) {
        setAuth(false);
        setMessage("An error occurred. Please log in again.");
        console.error("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, [customer_id]); // Add customer_id as a dependency

  const handleDelete = () => {
    axios
      .get("/user/logout")
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
                  <span className="sub_title">Welcome, {name}</span> User Pets
                </h2>

                <Link
                  to="/addpet"
                  className="btn btn_warning mb-5 mt-5 ms-5"
                  type="button"
                >
                  {" "}
                  <i className="fas fa-paw" />
                  <small className="cart_counter">Add Pet</small>
                </Link>

                <Link
                  to="/apphistory"
                  className="btn btn_warning mb-5 mt-5 ms-5"
                  type="button"
                >
                  {" "}
                  <i className="fas fa-paw" />
                  <small className="cart_counter">Appointment History</small>
                </Link>
              </div>

              <div className="container">
                <div className="row">
                  <div className="section_title">
                    <h2 className="title_text">
                      <span className="sub_title">Pets</span>{" "}
                      <h4>My Appointments</h4>
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
                            <th>Your Pet Name</th>
                            <th>Pet Type</th>
                            <th>Appointment Date</th>
                            <th>Purpose</th>
                            <th>Status </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(userData) && userData.length > 0 ? (
                            userData.map((user, index) => (
                              <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.pet_type}</td>
                                <td> {user.book_date}</td>
                                <td> {user.type}</td>
                                <td>{user.status}</td>
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
            </div>
            <div className="section_space_lg pt-0 mt-5"></div>
          </div>
        </section>
      </main>
    </div>
  );
};
