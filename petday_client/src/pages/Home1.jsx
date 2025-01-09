import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const Home1 = () => {
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
      .get("http://localhost:8080/user/")
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
        const response = await axios.get(
          `http://localhost:8080/user/pets/${customer_id}`
        );

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
      .get("http://localhost:8080/user/logout")
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
                  to="/addpet"
                  className="btn btn_warning mb-5 mt-5 ms-5"
                  type="button"
                >
                  {" "}
                  <i className="fas fa-paw" />
                  <small className="cart_counter">Appointment History</small>
                </Link>
              </div>

              {auth ? (
                <div className="row">
                  <div className="user-info mb-4">
                    <h4>Customer ID: {customer_id}</h4>
                    <h4>Name: {name}</h4>
                    <h4>Mobile: {mobile}</h4>
                  </div>
                  {Array.isArray(userData) && userData.length > 0 ? (
                    userData.map((user, index) => (
                      <div key={index} className="col-md-4">
                        <div className="iconbox_item iconbox_overicon">
                          <div className="item_icon">
                            <img
                              src="assets/images/shop/sales_img_1.jpg"
                              alt="Pet Care Service"
                            />
                          </div>

                          <div className="item_content ">
                            <div
                              style={{
                                textAlign: "right",

                                borderRadius: "100%",
                              }}
                            >
                              <Link
                                to="/petupdate"
                                state={{
                                  petid: user.pet_id,
                                }}
                              >
                                <i class="fas fa-pencil " title="Edit"></i>
                              </Link>
                            </div>
                            <h2 className="item_title "> {user.pet_type}</h2>
                            <h5>Fname: {user.name}</h5>
                            <h5>Gender: {user.gender}</h5>
                            <h5>Breed: {user.breed}</h5>
                            <h5>Age: {user.age} yrs</h5>
                            <ul className="item_info_list unorder_list_block"></ul>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No user data found</p>
                  )}
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
            <div className="section_space_lg pt-0 mt-5"></div>
          </div>
        </section>
      </main>
    </div>
  );
};
