import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const UpdatePet = () => {
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const { petid } = location.state || {}; // Safeguard against undefined state
  console.log("Location State:", location.state);

  const [customer_id, setCustomerId] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedCustomerId = localStorage.getItem("customer_id");
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []);
  const [values, setValues] = useState({
    pet_type: "",
    name: "",
    lname: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `/user/petbyid/${petid}`
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

    // Ensure petid is available before making the API call
    if (petid) {
      fetchUserData();
    }
  }, [petid]); // Update Pet_id as a dependency

  // Update the values state when customerId changes
  useEffect(() => {
    setValues((prevValues) => ({ ...prevValues, petid: petid }));
  }, [petid]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // For Using Cors and JWT Token for axios its required
  axios.defaults.withCredentials = true;

  // handle form on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/user/update-pet/${petid}`, values)
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Pet Updated Successfully");
          navigate("/home1");
        } else {
          alert("Error updating pet");
        }
      })
      .catch((err) => console.error("Error submitting form:", err));
  };
  return (
    <div className="body_wrap">
      <main style={{ marginTop: 100 }}>
        <section className="contact_section section_space_lg pb-0">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 offset-md-3 mb-5">
                <div className="section_title">
                  <h2 className="title_text">
                    <span className="sub_title">Pets</span> Update Pet
                  </h2>
                </div>
                <div className="contact_form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col col-md-12 col-sm-12">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="pet_type"
                          value={userData.pet_type}
                          onChange={handleChange}
                          required
                        >
                          {" "}
                          <option value="" disabled selected>
                            {" "}
                            Pet Type{" "}
                          </option>{" "}
                          <option value="Dog">Dog</option>{" "}
                          <option value="Cat">Cat</option>{" "}
                          <option value="Bird">Bird</option>{" "}
                        </select>
                      </div>

                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_email">
                            Pet Name<sup>*</sup>
                          </label>
                          <input
                            id="input_email"
                            type="text"
                            placeholder="Type Pet Name"
                            name="name"
                            defaultValue={userData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_email">
                            Last Name<sup>*</sup>
                          </label>
                          <input
                            id="input_lname"
                            type="text"
                            placeholder="Type Pet Last Name"
                            name="lname"
                            defaultValue={userData.lname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col col-md-6 col-sm-6">
                        <label className="input_title" htmlFor="input_email">
                          Gender<sup>*</sup>
                        </label>
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="gender"
                          value={userData.gender}
                          onChange={handleChange}
                          required
                        >
                          {" "}
                          <option value="" disabled selected>
                            {" "}
                            Gender{" "}
                          </option>{" "}
                          <option value="Male">Male</option>{" "}
                          <option value="Female">Female</option>{" "}
                        </select>
                      </div>

                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_email">
                            Age<sup>*</sup>
                          </label>
                          <input
                            id="input_lname"
                            type="text"
                            placeholder="Type Pet Age"
                            name="age"
                            defaultValue={userData.age}
                            onChange={handleChange}
                            required
                          />
                        </div>
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
