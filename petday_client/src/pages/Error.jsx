import React from "react";

export const Error = () => {
  return (
    <div className="body_wrap">
      <main>
        <section className="error_section">
          <div className="container text-center">
            <h1>
              4
              <img
                src="../assets/images/pet_food_bowl.png"
                alt="Pet Food Bowl"
              />
              4
            </h1>
            <h2>Page Not Found</h2>
            <p>
              The link you clicked may be broken or the page
              <span className="d-md-block">may have been removed</span>
            </p>
          </div>
          <ul className="social_links unorder_list_center">
            <li>
              <a href="#!">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-whatsapp" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};
