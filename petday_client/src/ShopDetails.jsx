import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PetShopDetails = () => {
  const [userData, setUserData] = useState([]);

  const location = useLocation()
  const product = location?.state || {};

  return (
    <div className="body_wrap">
      <main>
        <section className="details_section product_details section_space_lg pb-0">
          <div className="container">
            <div className="row mb-5">
              <div className="col col-lg-6">
                <div className="product_gallery_carousel">
                  <ul className="badge_group unorder_list_right">
                    <li>
                      <a className="badge badge_sale" href="#!">
                        Sale
                      </a>
                    </li>
                  </ul>
                  <div className="product_gallery_for slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 7540,
                          transform: "translate3d(-580px, 0px, 0px)"
                        }}
                      >
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          role="tabpanel"
                          id="slick-slide10"
                          aria-describedby="slick-slide-control10"
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          role="tabpanel"
                          id="slick-slide11"
                          aria-describedby="slick-slide-control11"
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={2}
                          aria-hidden="true"
                          tabIndex={-1}
                          role="tabpanel"
                          id="slick-slide12"
                          aria-describedby="slick-slide-control12"
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={3}
                          aria-hidden="true"
                          tabIndex={-1}
                          role="tabpanel"
                          id="slick-slide13"
                          aria-describedby="slick-slide-control13"
                          style={{ width: 580 }}
                        >
                          <img
                            src={product.item_image}
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={4}
                          aria-hidden="true"
                          tabIndex={-1}
                          role="tabpanel"
                          id="slick-slide14"
                          aria-describedby="slick-slide-control14"
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={5}
                          aria-hidden="true"
                          tabIndex={-1}
                          role="tabpanel"
                          id="slick-slide15"
                          aria-describedby="slick-slide-control15"
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={6}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={7}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={8}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={9}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={10}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={11}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 580 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                      </div>
                    </div>
                    <ul className="slick-dots" style={{}} role="tablist">
                      <li className="slick-active" role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control10"
                          aria-controls="slick-slide10"
                          aria-label="1 of 6"
                          tabIndex={0}
                          aria-selected="true"
                        >
                          1
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control11"
                          aria-controls="slick-slide11"
                          aria-label="2 of 6"
                          tabIndex={-1}
                        >
                          2
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control12"
                          aria-controls="slick-slide12"
                          aria-label="3 of 6"
                          tabIndex={-1}
                        >
                          3
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control13"
                          aria-controls="slick-slide13"
                          aria-label="4 of 6"
                          tabIndex={-1}
                        >
                          4
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control14"
                          aria-controls="slick-slide14"
                          aria-label="5 of 6"
                          tabIndex={-1}
                        >
                          5
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id="slick-slide-control15"
                          aria-controls="slick-slide15"
                          aria-label="6 of 6"
                          tabIndex={-1}
                        >
                          6
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="product_gallery_nav slick-initialized slick-slider slick-vertical">
                    <div
                      className="slick-list draggable"
                      style={{ height: "330.923px" }}
                    >
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          height: 1655,
                          transform: "translate3d(0px, -330px, 0px)"
                        }}
                      >
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={-3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={-2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-active"
                          data-slick-index={1}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-active"
                          data-slick-index={2}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={3}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={4}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide"
                          data-slick-index={5}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={6}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={7}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={8}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={9}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_27.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={10}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_28.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                        <div
                          className="image_wrap slick-slide slick-cloned"
                          data-slick-index={11}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 100 }}
                        >
                          <img
                            src="assets/images/shop/product_img_29.jpg"
                            alt="Dog Residence Mat"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="details_content">
                  <h2 className="item_title">{product.item_name}</h2>
                  <p>
                    Ornare arcu dui vivamus arcu felis bibendum ut. Auctor neque vitae
                    tempus quam pellentesque. Nibh ipsum consequat nisl vel pretium
                    lectus quam. Sagittis purus sit amet volutpat consequat mauris
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
                    <del>INR {product.mrp}</del> <span>{product.mrp - product.discount}</span>
                  </div>
                  <ul className="cart_action_wrap unorder_list">
                    <li>
                      <div className="quantity_wrap">
                        <span className="quantity_title">Qty:</span>
                        <form action="#">
                          <div className="quantity_form">
                            <button type="button" className="input_number_decrement">
                              <i className="far fa-angle-down" />
                            </button>
                            <input
                              className="input_number"
                              type="text"
                              defaultValue={1}
                            />
                            <button type="button" className="input_number_increment">
                              <i className="far fa-angle-up" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li>
                      <a className="btn btn_primary addtocart_btn" href="service">
                        <i className="fas fa-paw" /> Buy Now
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
                        <a href="#!">Toys</a> <a href="#!">Other</a>
                      </span>
                    </li>
                    <li className="categories_tags">
                      <strong>Tags:</strong>
                      <span>
                        <a href="#!">Beds</a> <a href="#!">Other</a>
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
            <div className="details_info_box">
              <ul className="nav tabs_nav_pill" role="tablist">
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_description"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_additional_info"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Additional Info
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_reviews"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab_description"
                  role="tabpanel"
                >
                  <h3>Product Description</h3>
                  <p>
                    One Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora
                    consectetur quos minus voluptates nisi hic alias libero explicabo
                    reiciendis sint ut quo nulla ipsa aliquid neque molestias et qui
                    sunt. Odit, molestiae. One Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quaerat, iste, architecto ullam tenetur quia
                    nemo ratione tempora consectetur quos minus voluptates nisi hic
                    alias libero explicabo reiciendis sint ut quo nulla ipsa aliquid
                    neque molestias et qui sunt. Odit, molestiae.
                  </p>
                  <p className="mb-0">
                    One Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora
                    consectetur quos minus voluptates nisi hic alias libero explicabo
                    reiciendis sint ut quo nulla ipsa aliquid neque molestias et qui
                    sunt. Odit, molestiae.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_additional_info"
                  role="tabpanel"
                >
                  <ul className="additional_info_table unorder_list_block">
                    <li>
                      <span>Brand</span> <span>Envato</span>
                    </li>
                    <li>
                      <span>Color</span> <span>Black</span>
                    </li>
                    <li>
                      <span>Size</span> <span>Medium</span>
                    </li>
                    <li>
                      <span>Weight</span> <span>27 KG</span>
                    </li>
                    <li>
                      <span>Dimensions</span> <span>16x22x123 CM</span>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="tab_reviews" role="tabpanel">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="comments_wrap">
                        <h3>Customer Questions &amp; Answers</h3>
                        <ul className="comments_list unorder_list_block">
                          <li>
                            <div className="comment_item">
                              <div className="thumbnail_wrap text-center">
                                <div className="commenter_thumbnail">
                                  <img
                                    src="assets/images/meta/thumbnail_img_5.jpg"
                                    alt="commenter Image"
                                  />
                                </div>
                                <h4 className="commenter_name">Melissa</h4>
                              </div>
                              <div className="comment_content">
                                <div className="mb-3 d-md-flex align-items-center justify-content-md-between">
                                  <span className="comment_date">
                                    February 5, 2022, at 11:22 am
                                  </span>
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
                                </div>
                                <p className="mb-0">
                                  Ultrices eros in cursus turpis massa tincidunt.
                                  Magna eget est lorem ipsum dolor sit amet. Eu
                                  tincidunt tortor aliquam nulla facilisi cras. Ipsum
                                  dolor sit amet consectetur adipiscing elit. Id
                                  venenatis a condimentum
                                </p>
                              </div>
                            </div>
                            <ul className="comments_list unorder_list_block">
                              <li>
                                <div className="comment_item">
                                  <div className="thumbnail_wrap text-center">
                                    <div className="commenter_thumbnail">
                                      <img
                                        src="assets/images/meta/thumbnail_img_6.jpg"
                                        alt="commenter Image"
                                      />
                                    </div>
                                    <h4 className="commenter_name">Luvleen</h4>
                                  </div>
                                  <div className="comment_content">
                                    <div className="mb-3 d-md-flex align-items-center justify-content-md-between">
                                      <span className="comment_date">
                                        February 5, 2022, at 01:01 pm
                                      </span>
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
                                    </div>
                                    <p className="mb-0">
                                      Tincidunt nunc pulvinar sapien et ligula
                                      ullamcorper malesuada. Placerat orci nulla
                                      pellentesque dignissim. Bibendum est ultricies
                                      integer quis auctor elit sed vulputate
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="comment_item">
                              <div className="thumbnail_wrap text-center">
                                <div className="commenter_thumbnail">
                                  <img
                                    src="assets/images/meta/thumbnail_img_7.jpg"
                                    alt="commenter Image"
                                  />
                                </div>
                                <h4 className="commenter_name">Fabiana</h4>
                              </div>
                              <div className="comment_content">
                                <div className="mb-3 d-md-flex align-items-center justify-content-md-between">
                                  <span className="comment_date">
                                    February 9, 2022, at 09:34 am
                                  </span>
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
                                </div>
                                <p className="mb-0">
                                  Ultrices eros in cursus turpis massa tincidunt.
                                  Magna eget est lorem ipsum dolor sit amet. Eu
                                  tincidunt tortor aliquam nulla facilisi cras. Ipsum
                                  dolor sit amet consectetur adipiscing elit. Id
                                  venenatis a condimentum
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="review_form">
                        <h3>Add a review</h3>
                        <div className="review_star_wrap mb-4">
                          <h4 className="input_title">
                            Your rating <sup>*</sup>
                          </h4>
                          <ul className="rating_star">
                            <li>
                              <a href="#!">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col">
                              <div className="form_item mb-0">
                                <label
                                  className="input_title"
                                  htmlFor="review_comment"
                                >
                                  Your review <sup>*</sup>
                                </label>
                                <textarea
                                  id="review_comment"
                                  name="comment"
                                  placeholder="Type your review"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col col-md-6">
                              <div className="form_item mb-0">
                                <label
                                  className="input_title"
                                  htmlFor="reviewer_name"
                                >
                                  Name <sup>*</sup>
                                </label>
                                <input
                                  id="reviewer_name"
                                  type="text"
                                  name="name"
                                  placeholder="Type your Name"
                                />
                              </div>
                            </div>
                            <div className="col col-md-6">
                              <div className="form_item mb-0">
                                <label
                                  className="input_title"
                                  htmlFor="reviewer_name"
                                >
                                  Email <sup>*</sup>
                                </label>
                                <input
                                  id="reviewer_email"
                                  type="text"
                                  name="email"
                                  placeholder="Type your Email"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <button type="submit" className="btn btn_primary">
                                <i className="fas fa-paw" /> Send a review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product_section section_space_lg">
          <div className="container">
            <div className="section_title">
              <h2 className="title_text mb-0">
                <span className="sub_title">Our Products</span> Top Products
              </h2>
            </div>
          </div>
          <div className="product_carousel">
            <div
              className="row common_carousel_4col slick-initialized slick-slider"
              data-slick='{"dots": false, "centerMode": true}'
            >
              <div className="slick-list draggable" style={{ padding: "0px 50px" }}>
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 6528,
                    transform: "translate3d(-2176px, 0px, 0px)"
                  }}
                >
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={-4}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <ul className="badge_group unorder_list_right">
                        <li>
                          <a className="badge badge_sale" href="#!" tabIndex={-1}>
                            Sale
                          </a>
                        </li>
                      </ul>
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_2.jpg"
                            alt="Squeezz Ball Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Squeezz Ball Dog Toy
                          </a>
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
                          <del>$12.39</del> <span>$7.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={-3}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_3.jpg"
                            alt="Hydrolyzed Dry Dog Food"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Hydrolyzed Dry Dog Food
                          </a>
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
                          <span>$12.39</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={-2}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_4.jpg"
                            alt="Flying Fish Cat Scratching "
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Flying Fish Cat Scratching
                          </a>
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
                          <span>$25.89</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={-1}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_5.jpg"
                            alt="Tug Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Tug Dog Toy
                          </a>
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
                          <span>$99.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={0}
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_1.jpg"
                            alt="Pink Spiked Collar"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Pink Spiked Collar
                          </a>
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
                          <span>$22.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={1}
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <ul className="badge_group unorder_list_right">
                        <li>
                          <a className="badge badge_sale" href="#!" tabIndex={-1}>
                            Sale
                          </a>
                        </li>
                      </ul>
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_2.jpg"
                            alt="Squeezz Ball Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Squeezz Ball Dog Toy
                          </a>
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
                          <del>$12.39</del> <span>$7.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={2}
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_3.jpg"
                            alt="Hydrolyzed Dry Dog Food"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Hydrolyzed Dry Dog Food
                          </a>
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
                          <span>$12.39</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={3}
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_4.jpg"
                            alt="Flying Fish Cat Scratching "
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Flying Fish Cat Scratching
                          </a>
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
                          <span>$25.89</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-active"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={4}
                    aria-hidden="false"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={0}>
                          <img
                            src="assets/images/shop/product_img_5.jpg"
                            alt="Tug Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={0}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={0}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={0}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={0}>
                            Tug Dog Toy
                          </a>
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
                          <span>$99.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-current slick-active slick-center"
                    style={{ width: 272 }}
                    tabIndex={0}
                    data-slick-index={5}
                    aria-hidden="false"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={0}>
                          <img
                            src="assets/images/shop/product_img_1.jpg"
                            alt="Pink Spiked Collar"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={0}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={0}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={0}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={0}>
                            Pink Spiked Collar
                          </a>
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
                          <span>$22.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-active"
                    style={{ width: 272 }}
                    tabIndex={0}
                    data-slick-index={6}
                    aria-hidden="false"
                  >
                    <div className="product_item">
                      <ul className="badge_group unorder_list_right">
                        <li>
                          <a className="badge badge_sale" href="#!" tabIndex={0}>
                            Sale
                          </a>
                        </li>
                      </ul>
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={0}>
                          <img
                            src="assets/images/shop/product_img_2.jpg"
                            alt="Squeezz Ball Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={0}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={0}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={0}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={0}>
                            Squeezz Ball Dog Toy
                          </a>
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
                          <del>$12.39</del> <span>$7.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide"
                    style={{ width: 272 }}
                    tabIndex={0}
                    data-slick-index={7}
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_3.jpg"
                            alt="Hydrolyzed Dry Dog Food"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Hydrolyzed Dry Dog Food
                          </a>
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
                          <span>$12.39</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={8}
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_4.jpg"
                            alt="Flying Fish Cat Scratching "
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Flying Fish Cat Scratching
                          </a>
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
                          <span>$25.89</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={9}
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_5.jpg"
                            alt="Tug Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Tug Dog Toy
                          </a>
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
                          <span>$99.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={10}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_1.jpg"
                            alt="Pink Spiked Collar"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Pink Spiked Collar
                          </a>
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
                          <span>$22.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={11}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <ul className="badge_group unorder_list_right">
                        <li>
                          <a className="badge badge_sale" href="#!" tabIndex={-1}>
                            Sale
                          </a>
                        </li>
                      </ul>
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_2.jpg"
                            alt="Squeezz Ball Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Squeezz Ball Dog Toy
                          </a>
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
                          <del>$12.39</del> <span>$7.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={12}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_3.jpg"
                            alt="Hydrolyzed Dry Dog Food"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Hydrolyzed Dry Dog Food
                          </a>
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
                          <span>$12.39</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={13}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_4.jpg"
                            alt="Flying Fish Cat Scratching "
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Flying Fish Cat Scratching
                          </a>
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
                          <span>$25.89</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={14}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_5.jpg"
                            alt="Tug Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Tug Dog Toy
                          </a>
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
                          <span>$99.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={15}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_1.jpg"
                            alt="Pink Spiked Collar"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Pink Spiked Collar
                          </a>
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
                          <span>$22.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={16}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <ul className="badge_group unorder_list_right">
                        <li>
                          <a className="badge badge_sale" href="#!" tabIndex={-1}>
                            Sale
                          </a>
                        </li>
                      </ul>
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_2.jpg"
                            alt="Squeezz Ball Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Squeezz Ball Dog Toy
                          </a>
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
                          <del>$12.39</del> <span>$7.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={17}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_3.jpg"
                            alt="Hydrolyzed Dry Dog Food"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Hydrolyzed Dry Dog Food
                          </a>
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
                          <span>$12.39</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={18}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_4.jpg"
                            alt="Flying Fish Cat Scratching "
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Flying Fish Cat Scratching
                          </a>
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
                          <span>$25.89</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col carousel_item slick-slide slick-cloned"
                    style={{ width: 272 }}
                    tabIndex={-1}
                    data-slick-index={19}
                    id=""
                    aria-hidden="true"
                  >
                    <div className="product_item">
                      <div className="item_image">
                        <a className="image_wrap" href="shop_details" tabIndex={-1}>
                          <img
                            src="assets/images/shop/product_img_5.jpg"
                            alt="Tug Dog Toy"
                          />
                        </a>
                        <ul className="cart_btns_group">
                          <li>
                            <a href="#!" tabIndex={-1}>
                              Buy Now
                            </a>
                          </li>
                          <li>
                            <a href="#!" tabIndex={-1}>
                              <i className="far fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_popup"
                              tabIndex={-1}
                            >
                              <i className="far fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="shop_details" tabIndex={-1}>
                            Tug Dog Toy
                          </a>
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
                          <span>$99.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_arrow">
              <div className="container">
                <button
                  type="button"
                  className="cc4c_left_arrow slick-arrow"
                  style={{}}
                >
                  <i className="far fa-arrow-left" />
                </button>
                <button
                  type="button"
                  className="cc4c_right_arrow slick-arrow"
                  style={{}}
                >
                  <i className="far fa-arrow-right" />
                </button>
              </div>
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
                              <i className="fas fa-paw" /> Buy Now
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
        <section className="offer_banner_section">
          <div className="container">
            <div
              className="offer_banner_item banner_big align-items-start d-block"
              style={{
                backgroundImage:
                  'url("assets/images/banner/offer_banner_bg_img_1.jpg")'
              }}
            >
              <div className="badge_wrap mb-5">
                <div className="badge">Up to 40% Off</div>
              </div>
              <div className="item_content">
                <h3 className="item_title">Сheck Out Our Specials</h3>
                <p>
                  Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis
                  gravida neque convallis
                </p>
                <a className="btn_unfill" href="service_details">
                  <span>Shop Now</span> <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};