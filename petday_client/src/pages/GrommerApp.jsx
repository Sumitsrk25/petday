import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

export const GrommerApp = () => {
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const { groomer_id } = location.state || {}; // Safeguard against undefined state
  const [customer_id, setCustomerId] = useState("");
  const [userData, setUserData] = useState([]);
  const [userData1, setUserData1] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [working_days, setworking_days] = useState([]);

  useEffect(() => {
    const storedCustomerId = localStorage.getItem("customer_id");
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []);
  const [values, setValues] = useState({
    customer_id: "",
    pet_id: "",
    book_date: "",
    type: "Visit",
  });

  // Update the values state when customerId changes
  useEffect(() => {
    setValues((prevValues) => ({ ...prevValues, customer_id: customer_id }));
  }, [customer_id]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // For Using Cors and JWT Token for axios its required
  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (userData?.working_days) {
      // Convert working days string to an array of day indexes
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const days = userData.working_days.split(",").map((day) => day.trim());
      const dayIndexes = days.map((day) => daysOfWeek.indexOf(day));
      setworking_days(dayIndexes);
    }
  }, [userData]);

  const isDayAllowed = (date) => {
    const today = new Date();
    // Allow only future dates and working days
    return date >= today && working_days.includes(date.getDay());
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValues((prevValues) => ({
      ...prevValues,
      book_date: date, // Update the book_date in form values
    }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/grommerbyid/${groomer_id}`
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

    // Ensure groomer_id is available before making the API call
    if (groomer_id) {
      fetchUserData();
    }
  }, [groomer_id]); // Update groomer_id as a dependency

  useEffect(() => {
    const fetchUserData1 = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/pets/${customer_id}`
        );

        if (response.status === 200) {
          setAuth(true);
          setUserData1(response.data); // Assuming the response contains an array or array-like structure
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
      fetchUserData1();
    }
  }, [customer_id]); // Update customer_id as a dependency

  // handle form on submit

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/user/book-appointment", values)
      // .then((res) => console.log(res))
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Appointment Added. Plz wait for confirmation");
          navigate("/home1");
        } else {
          alert("Error1");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="body_wrap">
      <main>
        <section className="contact_section section_space_lg pb-0">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 offset-md-3 mb-5">
                <div className="section_title">
                  <h2 className="title_text">
                    <span className="sub_title">Appointment</span> Book
                    Appointment
                  </h2>
                </div>
                <div className="contact_form">
                  <h4 className="title_text">
                    {userData.grooming_center_name}
                  </h4>
                  <div className="d-flex ">
                    <h6>
                      Appointment Days
                      <p
                        className="mt-2"
                        style={{ fontWeight: "normal", fontSize: "18px " }}
                      >
                        {userData.working_days}
                      </p>
                    </h6>
                  </div>
                  <br></br>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* <div className="col col-md-12 col-sm-12">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="working_days"
                          value={values.working_days}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select Day
                          </option>
                          {userData.working_days &&
                            userData.working_days
                              .split(",")
                              .map((day, index) => (
                                <option key={index} value={day.trim()}>
                                  {day.trim()}
                                </option>
                              ))}
                        </select>
                      </div> */}

                      <div className="col col-md-6 col-sm-6">
                        <label className="form-label">Select a Date</label>
                        <br />
                        <DatePicker
                          selected={selectedDate}
                          value={values.book_date}
                          onChange={handleDateChange}
                          filterDate={isDayAllowed} // Filter for working days and future dates
                          dateFormat="MM/dd/yyyy"
                          placeholderText="Select a date"
                          className="form-select form-select-lg mb-3"
                          onKeyDown={(e) => e.preventDefault()} // Block keyboard input
                        />
                      </div>

                      <div className="col col-md-6 col-sm-6">
                        <label className="form-label">Select Your Pet</label>
                        <br />
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="pet_id"
                          value={values.pet_id}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select Your Pet
                          </option>
                          {userData1.map((pet) => (
                            <option key={pet.pet_id} value={pet.pet_id}>
                              {pet.name} ({pet.pet_type})
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col col-md-12 col-sm-12">
                        <button type="submit" className="btn btn_primary">
                          <i className="fas fa-paw" /> Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="section_space_lg pt-0 mt-5">
              <div className="row justify-content-center">
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="iconbox_item iconbox_overicon">
                    <div className="item_icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Phone</h3>
                      <ul className="item_info_list unorder_list_block">
                        <li>(913) 756-3126</li>
                        <li>(921) 557-1203</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="iconbox_item iconbox_overicon">
                    <div className="item_icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Email</h3>
                      <ul className="item_info_list unorder_list_block">
                        <li>petopia@example.com</li>
                        <li>petopia@email.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="iconbox_item iconbox_overicon">
                    <div className="item_icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Address</h3>
                      <ul className="item_info_list unorder_list_block">
                        <li>17 Parkman Place, 2122</li>
                        <li>United States</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="iconbox_item iconbox_overicon">
                    <div className="item_icon">
                      <i className="fas fa-clock" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Open Hours</h3>
                      <ul className="item_info_list unorder_list_block">
                        <li>Mon - Fri: 7am - 6pm</li>
                        <li>Saturday: 9am - 4pm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
