import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const VetAdd = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    location: "",
    postaladdress: "",
    pin: "",
    city: "",
    state: "",
    gender: "",
    bio: "",
    gstno: "",
    medicalregno: "",
    workingdays: [],
    workinghrs_frm: "",
    workinghrs_to: "",
    speciality: "",
    clinicname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setValues((prev) => ({
        ...prev,
        [name]: [...prev[name], value],
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: prev[name].filter((day) => day !== value),
      }));
    }
  };

  // handle form on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/user/add-vet", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Vet profile added successfully!");
        } else {
          alert("Error adding vet profile.");
        }
      })
      .catch((err) => console.error(err));
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
                    <span className="sub_title">Vets</span> Create Vet Profile
                  </h2>
                </div>
                <div className="contact_form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* Profile Picture */}
                      <div className="col col-md-12 col-sm-12">
                        <label>Profile Picture</label>
                        <input
                          type="file"
                          name="picture"
                          onChange={handleChange}
                        />
                      </div>

                      {/* First Name */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          required
                        />
                      </div>

                      {/* Last Name */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </div>

                      {/* Mobile */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Mobile</label>
                        <input
                          type="text"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          placeholder="Mobile"
                          required
                        />
                      </div>

                      {/* Password */}
                      <div className="col col-md-6 form_item mb-0 ">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          placeholder="Password"
                          required
                        />
                      </div>

                      {/* Location */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Location</label>
                        <input
                          type="text"
                          name="location"
                          value={values.location}
                          onChange={handleChange}
                          placeholder="Location"
                        />
                      </div>

                      {/* Postal Address */}
                      <div className="col col-md-12 form_item mb-0">
                        <label>Postal Address</label>
                        <textarea
                          name="postaladdress"
                          value={values.postaladdress}
                          onChange={handleChange}
                          placeholder="Postal Address"
                        ></textarea>
                      </div>

                      {/* PIN */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>PIN</label>
                        <input
                          type="text"
                          name="pin"
                          value={values.pin}
                          onChange={handleChange}
                          placeholder="PIN"
                        />
                      </div>

                      {/* City */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          placeholder="City"
                        />
                      </div>

                      {/* State */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>State</label>
                        <input
                          type="text"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          placeholder="State"
                        />
                      </div>

                      {/* Gender */}
                      <div className="col col-md-6 ">
                        <label>Gender</label>
                        <select
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Bio */}
                      <div className="col col-md-12 form_item mb-0">
                        <label>Bio</label>
                        <textarea
                          name="bio"
                          value={values.bio}
                          onChange={handleChange}
                          placeholder="Bio"
                        ></textarea>
                      </div>

                      {/* GST Number */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>GST Number</label>
                        <input
                          type="text"
                          name="gstno"
                          value={values.gstno}
                          onChange={handleChange}
                          placeholder="GST Number"
                        />
                      </div>

                      {/* Medical Registration Number */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Medical Registration Number</label>
                        <input
                          type="text"
                          name="medicalregno"
                          value={values.medicalregno}
                          onChange={handleChange}
                          placeholder="Medical Registration Number"
                        />
                      </div>

                      {/* Working Days */}
                      <div className="col col-md-8 ">
                        <label>Working Days</label>
                        <br></br>
                        {[
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                          "Sunday",
                        ].map((day) => (
                          <label key={day}>
                            <input
                              type="checkbox"
                              name="workingdays"
                              style={{ marginLeft: "20px" }}
                              value={day}
                              checked={values.workingdays.includes(day)}
                              onChange={handleCheckboxChange}
                            />{" "}
                            {day}
                          </label>
                        ))}
                      </div>

                      {/* Working Hours */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Working Hours (From)</label>
                        <input
                          type="time"
                          name="workinghrs_frm"
                          value={values.workinghrs_frm}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col col-md-6 form_item mb-0">
                        <label>Working Hours (To)</label>
                        <input
                          type="time"
                          name="workinghrs_to"
                          value={values.workinghrs_to}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Speciality */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Speciality</label>
                        <input
                          type="text"
                          name="speciality"
                          value={values.speciality}
                          onChange={handleChange}
                          placeholder="Speciality"
                        />
                      </div>

                      {/* Clinic Name */}
                      <div className="col col-md-6 form_item mb-0">
                        <label>Clinic Name</label>
                        <input
                          type="text"
                          name="clinicname"
                          value={values.clinicname}
                          onChange={handleChange}
                          placeholder="Clinic Name"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="col col-md-12">
                        <button type="submit" className="btn btn_primary">
                          Save Profile
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
