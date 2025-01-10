import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const AddPet = () => {
  const navigate = useNavigate();

  const [customer_id, setCustomerId] = useState("");

  useEffect(() => {
    const storedCustomerId = localStorage.getItem("customer_id");
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []);
  const [values, setValues] = useState({
    customer_id: "",
    pet_type: "",
    name: "",
    lname: "",
    gender: "",
    age: "",
  });

  //Use if No value is added only if form value is added as here customer id is taken from localstorage
  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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

  // handle form on submit

  // handle form on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/user/add-pet", values)
      // .then((res) => console.log(res))
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Pet Added Successfully");
          navigate("/home1");
        } else {
          alert("Error1");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="body_wrap">
      <main style={{ marginTop: 100 }}>
        <section className="breadcrumb_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4 col-md-7 col-sm-9">
                <ul className="breadcrumb_nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>AddPet</li>
                </ul>
                <h1 className="page_title">AddPet</h1>
                <p className="page_description mb-0">
                  Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
                  enim nec dui nunc mattis enim ut tellus
                </p>
              </div>
            </div>
          </div>
          <div className="breadcrumb_img">
            <img
              src="assets/images/breadcrumb/breadcrumb_img_10.png"
              alt="Pet Care Service"
            />
          </div>
        </section>
        <section className="contact_section section_space_lg pb-0">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 offset-md-3 mb-5">
                <div className="section_title">
                  <h2 className="title_text">
                    <span className="sub_title">Pets</span> Add Pet
                  </h2>
                  <p className="mb-0">
                    Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                    mauris augue neque gravida in fermentum
                  </p>
                </div>
                <div className="contact_form">
                  <h2 className="title_text">
                    Welcome, Customer ID: {customer_id}
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col col-md-12 col-sm-12">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="pet_type"
                          value={values.pet_type}
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
                            value={values.name}
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
                            value={values.lname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col col-md-12 col-sm-12">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="gender"
                          value={values.gender}
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
                            value={values.age}
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
