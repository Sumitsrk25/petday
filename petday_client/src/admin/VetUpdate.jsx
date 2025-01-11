import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const VetUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vetid } = location.state || {}; // Safeguard against undefined state
  const [userData, setUserData] = useState([]);
  const [auth, setAuth] = useState(false);

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
    speciality: "",
    clinicname: "",
    workingdays: [], // This is correct, it should be an empty array initially
    workinghrs_frm: "",
    workinghrs_to: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/vetbyid/${vetid}`);
        if (response.status === 200) {
          const data = response.data;
          setValues({
            ...values,
            ...data,
            workingdays: data.workingdays ? data.workingdays.split(",") : [],
          });
        }
      } catch (error) {
        console.error("Error fetching vet details:", error);
      }
    };

    if (vetid) fetchUserData();
  }, [vetid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      workingdays: checked
        ? [...(prev.workingdays || []), value]
        : (prev.workingdays || []).filter((day) => day !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make sure workingdays is an array before calling join
    const payload = {
      ...values,
      // Ensure workingdays is an array (just in case it's not)
      workingdays: Array.isArray(values.workingdays)
        ? values.workingdays.join(",")
        : "",
    };

    try {
      const response = await axios.post(`/user/update-vet/${vetid}`, payload);
      if (response.status === 200) {
        alert("Profile updated successfully!");
      } else {
        console.error("Unexpected response:", response);
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error(
        "Error updating vet profile:",
        error.response || error.message
      );
      alert(
        `An error occurred: ${error.response?.data?.error || error.message}`
      );
    }
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
                    <span className="sub_title">Update</span> Update Vet
                  </h2>
                </div>
                <div className="contact_form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* First Name */}
                      <div className="col col-md-6 form_item ">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Last Name */}
                      <div className="col col-md-6 form_item">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="col col-md-6 form_item">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Mobile */}
                      <div className="col col-md-6 form_item">
                        <label>Mobile</label>
                        <input
                          type="text"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Password */}
                      <div className="col col-md-6 form_item">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Location */}
                      <div className="col col-md-6 form_item">
                        <label>Location</label>
                        <input
                          type="text"
                          name="location"
                          value={values.location}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Postal Address */}
                      <div className="col col-md-12 form_item">
                        <label>Postal Address</label>
                        <textarea
                          name="postaladdress"
                          value={values.postaladdress}
                          onChange={handleChange}
                        />
                      </div>

                      {/* PIN */}
                      <div className="col col-md-6 form_item">
                        <label>PIN</label>
                        <input
                          type="text"
                          name="pin"
                          value={values.pin}
                          onChange={handleChange}
                        />
                      </div>

                      {/* City */}
                      <div className="col col-md-6 form_item">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                        />
                      </div>

                      {/* State */}
                      <div className="col col-md-6 form_item">
                        <label>State</label>
                        <input
                          type="text"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Gender */}
                      <div className="col col-md-6 form_item">
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

                      {/* Working Days */}
                      <div className="col col-md-8">
                        <label>Working Days</label>
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
                              value={day}
                              checked={values.workingdays.includes(day)}
                              onChange={handleCheckboxChange}
                              style={{ marginLeft: "10px" }}
                            />
                            {day}
                          </label>
                        ))}
                      </div>

                      {/* Working Hours */}
                      <div className="col col-md-6 form_item">
                        <label>Working Hours (From)</label>
                        <input
                          type="time"
                          name="workinghrs_frm"
                          value={values.workinghrs_frm}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col col-md-6 form_item">
                        <label>Working Hours (To)</label>
                        <input
                          type="time"
                          name="workinghrs_to"
                          value={values.workinghrs_to}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Bio */}
                      <div className="col col-md-12 form_item">
                        <label>Bio</label>
                        <textarea
                          name="bio"
                          value={values.bio}
                          onChange={handleChange}
                        />
                      </div>

                      {/* GST Number */}
                      <div className="col col-md-6 form_item">
                        <label>GST Number</label>
                        <input
                          type="text"
                          name="gstno"
                          value={values.gstno}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Medical Registration Number */}
                      <div className="col col-md-6 form_item">
                        <label>Medical Registration Number</label>
                        <input
                          type="text"
                          name="medicalregno"
                          value={values.medicalregno}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Speciality */}
                      <div className="col col-md-6 form_item">
                        <label>Speciality</label>
                        <input
                          type="text"
                          name="speciality"
                          value={values.speciality}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Clinic Name */}
                      <div className="col col-md-6 form_item">
                        <label>Clinic Name</label>
                        <input
                          type="text"
                          name="clinicname"
                          value={values.clinicname}
                          onChange={handleChange}
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
            <div className="section_space_lg pt-0 mt-5">
              <div className="row justify-content-center">
                <div className="col col-lg-3 col-md-6 form_item col-sm-6">
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
                <div className="col col-lg-3 col-md-6 form_item col-sm-6">
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
                <div className="col col-lg-3 col-md-6 form_item col-sm-6">
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
                <div className="col col-lg-3 col-md-6 form_item col-sm-6">
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
