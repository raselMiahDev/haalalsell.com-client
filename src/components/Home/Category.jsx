import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoryListRequest } from "../../API/apiRequiest.js";
import CartListSkeleton from "../../Skeleton/CategoriesSkeleton.jsx";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await CategoryListRequest();
      setData(result);
    })();
  }, []);

  return (
    <div className="section p-3">
      <div className="container">
        <div className="row">
          <h4 className="my-3 p-0">Browse By Category</h4>
          {data.length > 0 ? (
            data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="col-6 col-md-2 col-lg-8r text-center col-md-8r"
                >
                  <Link
                    to={"/product-by-category/" + item["_id"]}
                    style={{ textDecoration: "none" }}
                    className="card h-100 rounded-3 category-hover"
                  >
                    <div className="card-body">
                      <img className="w-50 h-50" src={item["categoryImg"]} />
                      <p className="mt-3">{item["categoryName"]}</p>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
              <CartListSkeleton/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
