import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppStore } from "../store";

export const Login = () => {
  const navigate = useNavigate();
  const setUser = useAppStore(state => state.setUser)

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // For Using Cors and JWT Token for axios its required

  // handle form on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/user/login", values)
      // .then((res) => console.log(res))
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Login Successfull");
          // Store customer_id in localStorage
          setUser({ email: values.email })

          navigate("/home1");
        } else {
          alert(res.data.Error);
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
                  <li>Login</li>
                </ul>
                <h1 className="page_title">Login</h1>
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
                    <span className="sub_title">Login</span> User Login
                  </h2>
                  <p className="mb-0">
                    Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                    mauris augue neque gravida in fermentum
                  </p>
                </div>
                <div className="contact_form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col col-md-12 col-sm-12">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_email">
                            Email<sup>*</sup>
                          </label>
                          <input
                            id="input_email"
                            type="email"
                            placeholder="Type Your Email"
                            name="email"
                            onChange={(e) =>
                              setValues({ ...values, email: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col col-md-12 col-sm-12">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_email">
                            Password<sup>*</sup>
                          </label>
                          <input
                            id="input_email"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={(e) =>
                              setValues({ ...values, password: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col col-md-12 col-sm-12">
                        <button type="submit" className="btn btn_primary">
                          <i className="fas fa-paw" /> Login
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
