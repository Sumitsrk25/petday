import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

export const UserPets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customer_id } = location.state || {}; // Safeguard against undefined state
  const { user_name } = location.state || {}; // Safeguard against undefined state

  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [userData, setUserData] = useState([]);

  // For Using Cors and JWT Token for axios its required
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/pets/${customer_id}`);

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
                  to="/apphistory"
                  className="btn btn_warning mb-5 mt-5 ms-5"
                  type="button"
                  state={{
                    customer_id: { customer_id },
                    user_name: { name },
                  }}
                >
                  {" "}
                  <i className="fas fa-paw" />
                  <small className="cart_counter">Appointment History</small>
                </Link>

                <Link
                  to="/admin/vaccineadd1"
                  className="btn btn_warning mb-5 mt-5 ms-5"
                  type="button"
                  state={{
                    customer_id: { customer_id },
                  }}
                >
                  {" "}
                  <i className="fas fa-paw" />
                  <small className="cart_counter">Vaccine Add</small>
                </Link>
              </div>

              <div className="row">
                <div className="user-info mb-4">
                  {/* <h4>Customer ID: {customer_id}</h4> */}
                  <h4>Name: {user_name}</h4>
                </div>
                {Array.isArray(userData) && userData.length > 0 ? (
                  userData.map((user, index) => (
                    <div key={index} className="col-md-4">
                      <div className="iconbox_item iconbox_overicon">
                        <div className="item_icon">
                          <img
                            src="../assets/images/shop/sales_img_1.jpg"
                            alt="Pet Care Service"
                          />
                        </div>

                        <div className="item_content ">
                          <div className="d-flex justify-content-evenly mb-4">
                            <Link
                              to="/vaccinerecord"
                              state={{
                                petid: user.pet_id,
                              }}
                              className="btn btn_warning "
                              type="button"
                              style={{ fontSize: "14px" }}
                            >
                              Vaccine Record
                            </Link>

                            <Link
                              to="/petupdate"
                              state={{
                                petid: user.pet_id,
                              }}
                              className="btn btn_warning "
                              type="button"
                              style={{ fontSize: "14px" }}
                            >
                              Edit
                            </Link>
                          </div>
                          <h2 className="item_title "> {user.pet_type}</h2>
                          <h5>Name: {user.name}</h5>
                          <h5>Gender: {user.gender}</h5>
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
            </div>
            <div className="section_space_lg pt-0 mt-5"></div>
          </div>
        </section>
      </main>
    </div>
  );
};
