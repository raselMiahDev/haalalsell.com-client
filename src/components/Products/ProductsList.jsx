import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const ProductsList = (props) => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {props.data.map((item, i) => {
            let price = (
              <p className="bodyMedium  text-dark my-1">
                Price: ৳ {item["price"]}{" "}
              </p>
            );
            if (item["discount"] === true) {
              price = (
                <p className="bodyMedium  text-dark my-1">
                  Price: <strike>${item["price"]}</strike> $
                  {item["discountPrice"]}
                </p>
              );
            }

            return (
              <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-6">
                <Link
                style={{textDecoration:"none"}}
                  to={"/details/" + item["_id"]}
                  className="card shadow-sm rounded"
                >
                  <img height={250} src={item["image"]} />
                  <div className="card-body">
                  <h6 className="card-title py-2">{item["title"]}</h6>
                    {price}
                    <StarRatings
                      rating={parseFloat(item["star"])}
                      starRatedColor="red"
                      starDimension="15px"
                      starSpacing="2px"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
