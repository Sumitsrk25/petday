import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

export const VaccineRecord = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const { petid } = location.state || {}; // Safeguard against undefined state
  console.log("Location State:", location.state);

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
        const response = await axios.get(`/user/vaccinebypetid/${petid}`);
        console.log("Vaccine Response:", response.data);

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
        console.error("Error fetching vaccines:", err);
      }
    };

    fetchUserData();
  }, [petid]); // Add customer_id as a dependency

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
                  <span className="sub_title">Pets</span>{" "}
                  <h4>Vaccine Records</h4>
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
                        <th>Sr.No</th>
                        <th>Vaccine Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(userData) && userData.length > 0 ? (
                        userData.map((user, index) => (
                          <tr key={index}>
                            <td>
                              {index + 1} <br></br>
                            </td>{" "}
                            {/* This will show the Sr. No */}
                            <td>
                              {user.vaccine_name} <br></br>
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
