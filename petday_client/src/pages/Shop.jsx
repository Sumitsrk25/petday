import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PetShop = () => {
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
      .get("/user/")
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
        const response = await axios.get(`/user/shop-all`);

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

  const handleDelete = () => {
    axios
      .get("/user/logout")
      .then((res) => {
        location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body_wrap">
      <main>
        <section className="breadcrumb_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4 col-md-7 col-sm-9">
                <ul className="breadcrumb_nav">
                  <li>
                    <a href="index">Home</a>
                  </li>
                  <li>Shop</li>
                </ul>
                <h1 className="page_title">Shop</h1>
                <p className="page_description mb-0">
                  Nisl rhoncus mattis rhoncus urna neque. Montes nascetur ridiculus
                  mus mauris vitae ultricies
                </p>
              </div>
            </div>
          </div>
          <div className="breadcrumb_img dog_image">
            <img
              src="assets/images/breadcrumb/breadcrumb_img_4.png"
              alt="Pet Care Service"
            />
          </div>
        </section>
        <section className="product_section section_space_lg">
          <div className="container">
            <div className="row">
              <div className="col col-lg-12">
                {/* <div className="filter_topdar">
                  <div className="filter_search_result">
                    Showing <span>1-9</span> of <span>20</span> results
                  </div>
                  <div className="select_option mb-0">
                    <select style={{ display: "none" }}>
                      <option data-display="Sorting The Products">
                        Select A Option
                      </option>
                      <option value={1} selected="selected">
                        Default Sorting
                      </option>
                      <option value={2}>Sort By Date</option>
                      <option value={3}>Sort By Price</option>
                      <option value={4}>Sort Category</option>
                    </select>
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">Default Sorting</span>
                      <ul className="list">
                        <li
                          data-value="Select A Option"
                          data-display="Sorting The Products"
                          className="option"
                        >
                          Select A Option
                        </li>
                        <li data-value={1} className="option selected">
                          Default Sorting
                        </li>
                        <li data-value={2} className="option">
                          Sort By Date
                        </li>
                        <li data-value={3} className="option">
                          Sort By Price
                        </li>
                        <li data-value={4} className="option">
                          Sort Category
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  {Array.isArray(userData) && userData.length > 0 ? userData.map((e, i) => {
                    return <div key={`${e}`} className="col col-lg-3 col-md-6 col-sm-6">
                      <div className="product_item">
                        {i % 3 === 0 && <ul className="badge_group unorder_list_right">
                          <li>
                            <a className="badge badge_sale" href="#!">
                              Sale
                            </a>
                          </li>
                        </ul>}
                        <div className="item_image">
                          <Link state={e} className="image_wrap" to="/shop_details">
                            <img
                              src={e.item_image}
                              alt="Teeth Cleaning Toy"
                            />
                          </Link>
                          {/* <ul className="cart_btns_group">
                            <li>
                              <a href="#!"></a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="far fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-bs-toggle="modal"
                                data-bs-target="#quick_view_popup"
                              >
                                <i className="far fa-eye" />
                              </a>
                            </li>
                          </ul> */}
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">
                            <Link state={e} to="/shop_details">{e.item_name}</Link>
                          </h3>
                          <ul className="rating_star">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <div className="item_price">
                            <del>INR {e.mrp}</del> <span>{e.mrp - e.discount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  }) : 'Loading'}
                </div>
                <div className="pagination_wrap">
                  <ul className="pagination_nav unorder_list">
                    <li className="active">
                      <a href="#!">1</a>
                    </li>
                    <li>
                      <a href="#!">2</a>
                    </li>
                    <li>
                      <a href="#!">3</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col col-lg-3">
                <aside className="sidebar_section">
                  <div className="sb_widget">
                    <h3
                      className="sb_widget_title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_categories"
                      aria-expanded="false"
                    >
                      Categories
                    </h3>
                    <div className="collapse show" id="collapse_categories">
                      <div className="card card-body">
                        <form action="#!">
                          <ul className="filter_category_list unorder_list_block">
                            <li>
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox_parrot" />
                                <label htmlFor="checkbox_parrot">
                                  <span>Parrot</span> <small>12</small>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox_dogs" />
                                <label htmlFor="checkbox_dogs">
                                  <span>Dogs</span> <small>56</small>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox_cat" />
                                <label htmlFor="checkbox_cat">
                                  <span>Cat</span> <small>66</small>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox_other" />
                                <label htmlFor="checkbox_other">
                                  <span>Other</span> <small>34</small>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox_clothes" />
                                <label htmlFor="checkbox_clothes">
                                  <span>Clothes</span> <small>22</small>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="sb_widget">
                    <h3
                      className="sb_widget_title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_range"
                      aria-expanded="false"
                    >
                      Price range
                    </h3>
                    <div className="collapse show" id="collapse_range">
                      <div className="card card-body">
                        <form action="#">
                          <div className="price-range-area clearfix">
                            <div
                              id="slider-range"
                              className="slider-range ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                            >
                              <div
                                className="ui-slider-range ui-widget-header ui-corner-all"
                                style={{ left: "0.5%", width: "35%" }}
                              />
                              <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                tabIndex={0}
                                style={{ left: "0.5%" }}
                              />
                              <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                tabIndex={0}
                                style={{ left: "35.5%" }}
                              />
                            </div>
                            <div className="price-text">
                              <span>Range:</span>
                              <input type="text" id="amount" readOnly="readonly" />
                            </div>
                            <button type="button" className="price_filter_btn">
                              Apply Filter
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="sb_widget">
                    <h3
                      className="sb_widget_title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_type"
                      aria-expanded="false"
                    >
                      Product type
                    </h3>
                    <div className="collapse show" id="collapse_product_type">
                      <div className="card card-body">
                        <ul className="page_list unorder_list_block">
                          <li>
                            <a href="#!">
                              <i className="fas fa-circle" /> Beef
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-circle" /> Fish
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-circle" /> Food
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-circle" /> Rewards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sb_widget">
                    <h3
                      className="sb_widget_title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_related_products"
                      aria-expanded="false"
                    >
                      Related products
                    </h3>
                    <div className="collapse show" id="collapse_related_products">
                      <div className="card card-body">
                        <div className="small_product_item">
                          <a className="item_image" href="shop_details">
                            <img
                              src="assets/images/shop/product_img_24.jpg"
                              alt="Rhinestone Pet Collar"
                            />
                          </a>
                          <div className="item_content">
                            <h3 className="item_title">
                              <a href="shop_details">Rhinestone Pet Collar</a>
                            </h3>
                            <div className="item_price">
                              <span>$11.39</span>
                            </div>
                          </div>
                        </div>
                        <div className="small_product_item">
                          <a className="item_image" href="shop_details">
                            <img
                              src="assets/images/shop/product_img_25.jpg"
                              alt="Duck Jerky Strips"
                            />
                          </a>
                          <div className="item_content">
                            <h3 className="item_title">
                              <a href="shop_details">Duck Jerky Strips</a>
                            </h3>
                            <div className="item_price">
                              <span>$11.39</span>
                            </div>
                          </div>
                        </div>
                        <div className="small_product_item">
                          <a className="item_image" href="shop_details">
                            <img
                              src="assets/images/shop/product_img_26.jpg"
                              alt="Teeth Cleaning Toy"
                            />
                          </a>
                          <div className="item_content">
                            <h3 className="item_title">
                              <a href="shop_details">Teeth Cleaning Toy</a>
                            </h3>
                            <div className="item_price">
                              <span>$11.39</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sb_widget">
                    <h3
                      className="sb_widget_title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_product_tag"
                      aria-expanded="false"
                    >
                      Product Tag
                    </h3>
                    <div className="collapse show" id="collapse_product_tag">
                      <div className="card card-body">
                        <ul className="tags_list unorder_list">
                          <li>
                            <a href="#!">Toys</a>
                          </li>
                          <li>
                            <a href="#!">Nature</a>
                          </li>
                          <li>
                            <a href="#!">Healthy</a>
                          </li>
                          <li>
                            <a href="#!">Collars</a>
                          </li>
                          <li>
                            <a href="#!">Pillows</a>
                          </li>
                          <li>
                            <a href="#!">Carrier</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </aside>
              </div> */}
            </div>
          </div>
        </section>
        <div
          className="modal fade"
          id="quick_view_popup"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fal fa-times" />
              </button>
              <div className="modal-body">
                <div className="product_details">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="details_image mb-0">
                        <img
                          src="assets/images/shop/product_img_27.jpg"
                          alt="Dog Residence Mat"
                        />
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="details_content">
                        <h2 className="item_title">Cat Collection</h2>
                        <p>
                          Ornare arcu dui vivamus arcu felis bibendum ut. Auctor neque
                          vitae tempus quam pellentesque. Nibh ipsum consequat nisl
                          vel pretium lectus quam.
                        </p>
                        <div className="item_review_info d-flex align-items-center">
                          <ul className="rating_star">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <div className="review_counter">
                            <span>2</span> Reviews
                          </div>
                        </div>
                        <div className="item_price">
                          <del>$12.39</del> <span>$7.99</span>
                        </div>
                        <ul className="cart_action_wrap unorder_list">
                          <li>
                            <div className="quantity_wrap">
                              <span className="quantity_title">Qty:</span>
                              <form action="#">
                                <div className="quantity_form">
                                  <button
                                    type="button"
                                    className="input_number_decrement"
                                  >
                                    <i className="far fa-angle-down" />
                                  </button>
                                  <input
                                    className="input_number"
                                    type="text"
                                    defaultValue={1}
                                  />
                                  <button
                                    type="button"
                                    className="input_number_increment"
                                  >
                                    <i className="far fa-angle-up" />
                                  </button>
                                </div>
                              </form>
                            </div>
                          </li>
                          <li>
                            <a
                              className="btn btn_primary addtocart_btn"
                              href="service"
                            >
                              <i className="fas fa-paw" /> Add to Cart
                            </a>
                          </li>
                        </ul>
                        <ul className="details_item_info icon_list unorder_list_block">
                          <li>
                            <strong>SKU:</strong> <span>74141</span>
                          </li>
                          <li className="categories_tags">
                            <strong>Categories:</strong>
                            <span>
                              <a href="#!">Toys</a>
                              <a href="#!">Other</a>
                            </span>
                          </li>
                          <li className="categories_tags">
                            <strong>Tags:</strong>
                            <span>
                              <a href="#!">Beds</a>
                              <a href="#!">Other</a>
                            </span>
                          </li>
                          <li className="share_links">
                            <strong>Share:</strong>
                            <span>
                              <a href="#!">
                                <i className="fab fa-instagram" />
                              </a>
                              <a href="#!">
                                <i className="fab fa-twitter" />
                              </a>
                              <a href="#!">
                                <i className="fab fa-whatsapp" />
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="subscribe_section">
          <div className="container">
            <div className="subscribe_wrap decoration_wrap">
              <div className="content_wrap">
                <h2 className="title_text">
                  Get 20% Off Your First Purchase When You Use Petco Credit Card
                </h2>
                <p className="description_text">
                  Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
                  Ligula ullamcorper malesuada proin libero nunc consequat interdum
                  varius sit.
                </p>
                <form action="#">
                  <div className="form_item mb-0">
                    <input type="email" name="email" placeholder="Type your Email" />
                    <button className="btn btn_warning" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="overlay"
                style={{
                  backgroundImage: 'url("assets/images/overlay/shapes_overlay_5.svg")'
                }}
              />
              <div className="decoration_item shape_image_1">
                <img src="assets/images/shape/shape_path_5.svg" alt="Shape Image" />
              </div>
              <div className="decoration_item shape_image_2">
                <img src="assets/images/shape/shape_circle_1.svg" alt="Shape Image" />
              </div>
              <div className="decoration_item pet_image_1">
                <img src="assets/images/about/about_img_4.png" alt="Pet Image" />
              </div>
              <div className="decoration_item pet_image_2">
                <img src="assets/images/about/about_img_5.png" alt="Pet Image" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};