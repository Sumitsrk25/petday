import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const AppHistoryAdmin = () => {
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
        const response = await axios.get(
          `/user/appbycustomerid/${customer_id}`
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

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/get-appointments");
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = async (aid, newStatus) => {
    try {
      console.log("Sending status update request:", {
        appointmentId: aid,
        status: newStatus,
      });

      const response = await axios.post("/user/update-status", {
        appointmentId: aid,
        status: newStatus,
      });

      console.log("Response from server:", response.data);

      if (response.data.Status === "Success") {
        setUserData((prevUserData) =>
          prevUserData.map((appointment) =>
            appointment.aid === aid
              ? { ...appointment, status: newStatus }
              : appointment
          )
        );

        // Show success confirmation
        alert("Status updated successfully!");
      } else {
        console.error("Server returned an error:", response.data);
        alert("Error updating status.");
      }
    } catch (error) {
      console.error(
        "Error in handleStatusChange:",
        error.response || error.message
      );
      alert("Error updating status.");
    }
  };

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
                  <span className="sub_title">Pets</span> Appointment
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
                        <th>Customer Id</th>
                        <th>Your Pet Name</th>
                        <th>Pet Type</th>
                        <th>Appointment Date</th>
                        <th>Purpose</th>
                        <th>Status </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(userData) && userData.length > 0 ? (
                        userData.map((appointment, index) => (
                          <tr key={index}>
                            <td>{appointment.customer_id}</td>
                            <td>{appointment.name}</td>
                            <td>{appointment.pet_type}</td>
                            <td>{appointment.book_date}</td>
                            <td>{appointment.type}</td>
                            <td>
                              {/* Show the already present value as default */}
                              <select
                                value={appointment.status} // Default value from the database
                                onChange={(e) =>
                                  handleStatusChange(
                                    appointment.aid,
                                    e.target.value
                                  )
                                }
                              >
                                <option value="Pending">Pending</option>
                                <option value="Approve">Approve</option>
                                <option value="Rejected">Rejected</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No appointments found.</td>
                        </tr>
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
