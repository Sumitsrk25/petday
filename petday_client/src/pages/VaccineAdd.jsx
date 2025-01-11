import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const VaccineAdd = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const [customer_id, setCustomerId] = useState("");
  const [userData, setUserData] = useState([]);
  const [userData1, setUserData1] = useState([]);

  useEffect(() => {
    const storedCustomerId = localStorage.getItem("customer_id");
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []);
  const [values, setValues] = useState({
    customer_id: "",
    pet_id: "",
    vaccine_name: "",
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
    const fetchUserData1 = async () => {
      try {
        const response = await axios.get(`/user/pets/${customer_id}`);

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
      .post("/user/add-vaccine", values)
      // .then((res) => console.log(res))
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Vaccine Added Successfully");
          navigate("/home1");
        } else {
          alert("Error");
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
                    <span className="sub_title">Vaccine</span> Add Vaccine
                    Appointment
                  </h2>
                </div>
                <div className="contact_form">
                  <h4 className="title_text">
                    Dr. {userData.firstName}
                    {userData.lastName}
                  </h4>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* <div className="col col-md-12 col-sm-12">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="workingdays"
                          value={values.workingdays}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select Day
                          </option>
                          {userData.workingdays &&
                            userData.workingdays
                              .split(",")
                              .map((day, index) => (
                                <option key={index} value={day.trim()}>
                                  {day.trim()}
                                </option>
                              ))}
                        </select>
                      </div> */}

                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_name">
                            Vaccine Name<sup>*</sup>
                          </label>
                          <input
                            type="text"
                            placeholder="Type Vaccine Name"
                            name="vaccine_name"
                            onChange={(e) =>
                              setValues({
                                ...values,
                                vaccine_name: e.target.value,
                              })
                            }
                          />
                        </div>
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
