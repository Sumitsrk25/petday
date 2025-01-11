import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

export const UserAppHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customer_id } = location.state || {}; // Safeguard against undefined state
  const { user_name } = location.state || {}; // Safeguard against undefined state

  const [userData, setUserData] = useState([]);

  // For Using Cors and JWT Token for axios its required
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!customer_id) return; // Ensure customer_id is available before calling

        const response = await axios.get(
          `/user/appbycustomerid/${customer_id}`
        );
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
                  <span className="sub_title">Pets</span> <h4>Appointments</h4>
                </h2>
              </div>

              <div className="row g-5">
                <div className="user-info mb-4">
                  {/* <h4>Customer ID: {customer_id}</h4> */}
                  <h4>Name: {user_name}</h4>
                </div>
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Your Pet Name</th>
                      <th>Pet Type</th>
                      <th>Vet Name</th>
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
                          <td>
                            Dr. {user.firstName} {user.lastName}
                          </td>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
