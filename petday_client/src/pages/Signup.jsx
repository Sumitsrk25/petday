import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
  });

  // handle form on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/user/register", values)
      // .then((res) => console.log(res))
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Login Successfull1");
          navigate("/login");
        } else {
          alert("Error1");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="body_wrap">
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up" />
        </a>
      </div>
      <header className="header_section header_boxed">
        <div className="container">
          <div className="box_wrap d-flex align-items-center justify-content-between">
            <div className="site_logo">
              <a href="index.html">
                <img
                  className="logo_before"
                  src="assets/images/logo/logo.svg"
                  alt="Petday Logo"
                />
              </a>
            </div>
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className="main_menu_inner collapse navbar-collapse"
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unorder_list_center">
                  <li className="active">
                    <a
                      className="nav-link"
                      href="index.html"
                      id="home_submenu"
                      role="button"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="shop_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="shop_submenu"
                    >
                      <li>
                        <a href="shop.html">Our Shop</a>
                      </li>
                      <li>
                        <a href="shop_details.html">Shop Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="about.html"
                      id="home_submenu"
                      role="button"
                      aria-expanded="false"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="faq.html"
                      id="home_submenu"
                      role="button"
                      aria-expanded="false"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="contact.html"
                      id="home_submenu"
                      role="button"
                      aria-expanded="false"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <ul className="header_btns_group unorder_list_right">
              <li>
                <button
                  className="mobile_menu_btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_menu_dropdown"
                  aria-controls="main_menu_dropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-bars" />
                </button>
              </li>
              <li className="dropdown">
                <button
                  className="cart_btn"
                  type="button"
                  id="cart_dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-shopping-cart" />
                  <small className="cart_counter">2</small> <span>item</span>
                </button>
                <div
                  className="cart_dropdown dropdown-menu"
                  aria-labelledby="cart_dropdown"
                >
                  <ul className="cart_items_list unorder_list_block">
                    <li>
                      <a className="item_image" href="shop_details.html">
                        <img
                          src="assets/images/cart/cart_img_1.jpg"
                          alt="Pet Care Service"
                        />
                      </a>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details.html">
                            Flying Fish Cat Scratching
                          </a>
                        </h3>
                        <span className="item_price">1 × $12.35</span>
                      </div>
                      <button className="remove_btn" type="button">
                        <i className="fal fa-times" />
                      </button>
                    </li>
                    <li>
                      <a className="item_image" href="shop_details.html">
                        <img
                          src="assets/images/cart/cart_img_2.jpg"
                          alt="Pet Care Service"
                        />
                      </a>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details.html">Pet Bed</a>
                        </h3>
                        <span className="item_price">1 × $58.16</span>
                      </div>
                      <button className="remove_btn" type="button">
                        <i className="fal fa-times" />
                      </button>
                    </li>
                  </ul>
                  <hr />
                  <div className="total_price">
                    <span>Total</span> <strong>$70.51</strong>
                  </div>
                  <a className="btn border_primary" href="cart.html">
                    Update Cart
                  </a>
                  <a className="btn btn_primary" href="cart.html">
                    Checkout
                  </a>
                </div>
              </li>
              <li className="dropdown">
                <button
                  className="cart_btn"
                  type="button"
                  id="cart_dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-calendar-alt" />
                  <small className="cart_counter">Book</small>
                  <span>Appointment</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main style={{ marginTop: 100 }}>
        <section className="breadcrumb_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4 col-md-7 col-sm-9">
                <ul className="breadcrumb_nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>SignUp</li>
                </ul>
                <h1 className="page_title">SignUp</h1>
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
                    <span className="sub_title">SignUp</span> User SignUp
                  </h2>
                  <p className="mb-0">
                    Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                    mauris augue neque gravida in fermentum
                  </p>
                </div>
                <div className="contact_form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_name">
                            First Name<sup>*</sup>
                          </label>
                          <input
                            id="input_name"
                            type="text"
                            placeholder="Type Your Name"
                            name="name"
                            onChange={(e) =>
                              setValues({ ...values, name: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_name">
                            Last Name<sup>*</sup>
                          </label>
                          <input
                            id="input_name"
                            type="text"
                            placeholder="Type Your Last Name"
                            name="lname"
                            onChange={(e) =>
                              setValues({ ...values, lname: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col col-md-6 col-sm-6">
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
                      <div className="col col-md-6 col-sm-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_email">
                            Mobile No<sup>*</sup>
                          </label>
                          <input
                            id="input_email"
                            type="number"
                            placeholder="Type Your Email"
                            name="mobile"
                            onChange={(e) =>
                              setValues({ ...values, mobile: e.target.value })
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
                          <i className="fas fa-paw" /> SignUp
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
