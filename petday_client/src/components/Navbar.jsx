import { Link } from "react-router-dom";
import { useAppStore } from "../store";

export const Navbar = () => {
  const user = useAppStore(state => state.user);
  const logout = useAppStore(state => state.logout)

  return user?.email ? (
    <>
      {/* Header START */}
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
                    <button
                      className="nav-link"
                      href="contact.html"
                      id="home_submenu"
                      role="button"
                      aria-expanded="false"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
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
                <div className="btn-group">
                  {/* Button to trigger dropdown */}
                  <button
                    className="btn btn_warning dropdown-toggle"
                    type="button"
                    id="bookAppointmentDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-paw" />
                    <small className="cart_counter">Book Appointment</small>
                  </button>
                  {/* Dropdown Menu */}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="bookAppointmentDropdown"
                    style={{}}
                  >
                    <li>
                      <a className="dropdown-item" href="vets">
                        <i className="fas fa-user-md" /> Book with Vet
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="groomers">
                        <i className="fas fa-cut" /> Book with Groomer
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Header END */}
    </>
  ) : <>
    {/* Header START */}
    <div className="backtotop">
      <a href="#" className="scroll">
        <i className="far fa-arrow-up" />
      </a>
    </div>
    <header className="header_section header_boxed">
      <div className="container">
        <div className="box_wrap d-flex align-items-center justify-content-between">
          <div className="site_logo">
            <Link to="/">
              <img
                className="logo_before"
                src="assets/images/logo/logo.svg"
                alt="Petday Logo"
                style={{ width: 150 }}
              />
            </Link>
          </div>
          <nav className="main_menu navbar navbar-expand-lg">
            <div
              className="main_menu_inner collapse navbar-collapse"
              id="main_menu_dropdown"
            >
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{ borderRadius: 5 }}
                  />
                  <div className="input-group-btn" style={{ marginLeft: 2 }}>
                    <button className="btn btn-warning" type="submit">
                      <i
                        className="fas fa-search"
                        style={{ color: "black", marginLeft: 3 }}
                      />
                    </button>
                  </div>
                </div>
              </form>
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
              <a href="signup" className="cart_btn" type="button">
                <i className="fas fa-paw" />
                <small className="cart_counter">Signup</small>
              </a>
            </li>
            <li className="dropdown">
              <a href="login" className="cart_btn" type="button">
                <i className="fas fa-paw" />
                <small className="cart_counter">Login</small>
              </a>
            </li>
            <li className="dropdown">
              <a href="logout" className="cart_btn" type="button">
                <i className="fas fa-paw" />
                <small className="cart_counter">Partners</small>
              </a>
            </li>
            <li className="dropdown">
              <a href="logout" className="cart_btn" type="button">
                <i className="fas fa-paw" />
                <small className="cart_counter">Contact Us</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>


    {/* Header END */}
  </>;
};
