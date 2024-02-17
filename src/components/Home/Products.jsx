import React, { useState, useEffect } from "react";
import { FaEye, FaFacebookF } from "react-icons/fa";
import { ProductListByRemarkRequest } from "../../API/apiRequiest.js";
import "../../assets/css/productCard.css";
import ProductCard from "../Products/ProductCard.jsx";
import { Link } from "react-router-dom";

const Products = () => {
  const [data_new, setData_new] = useState([]);
  const [data_trending, setData_trending] = useState([]);
  const [data_popular, setData_popular] = useState([]);
  const [data_top, setData_top] = useState([]);
  const [data_special, setData_special] = useState([]);

  useEffect(() => {
    (async () => {
      let newProduct = await ProductListByRemarkRequest("new");
      setData_new(newProduct);

      let trendingProduct = await ProductListByRemarkRequest("trending");
      setData_trending(trendingProduct);

      let popularProduct = await ProductListByRemarkRequest("popular");
      setData_popular(popularProduct);

      let topProduct = await ProductListByRemarkRequest("top");
      setData_top(topProduct);

      let specialProduct = await ProductListByRemarkRequest("special");
      setData_special(specialProduct);
    })();
  }, [0]);

  return (
    <div className="section py-5">
      <div className="container py-3 rounded" style={{backgroundColor:"#f3f3f3"}}>
        <div className="row">
          <div className="col-12">
            <div>
              <div className="d-flex">
                <p className="w-100">
                  <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-new"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          New
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-trending"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Trending
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-popular"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Popular
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-disabled-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-top"
                          type="button"
                          role="tab"
                          aria-controls="pills-disabled"
                          aria-selected="false"
                        >
                          Top
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-disabled-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-special"
                          type="button"
                          role="tab"
                          aria-controls="pills-disabled"
                          aria-selected="false"
                        >
                          Special
                        </button>
                      </li>
                  </ul>
                  <hr/>
                </p>
              </div>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-new"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0"
                >
                  <ProductCard data={data_new}/>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-trending"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
                >
                  <ProductCard data={data_trending}/>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-popular"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex="0"
                >
                  <ProductCard data={data_popular}/>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-top"
                  role="tabpanel"
                  aria-labelledby="pills-disabled-tab"
                  tabIndex="0"
                >
                  <ProductCard data={data_top}/>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-special"
                  role="tabpanel"
                  aria-labelledby="pills-disabled-tab"
                  tabIndex="0"
                >
                   <ProductCard data={data_special}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
