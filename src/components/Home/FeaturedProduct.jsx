import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/images/plainb-logo1.svg"

const FeaturedProduct = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-12 bg-dark p-5 rounded shadow">
                    <div className="row">
                        <div className="col-md-6">
                            <span className='text-success'>Category</span>
                            <h2 className='text-white py-3'>Enhance Your Music Experience</h2>
                            <Link className='btn btn-warning'>Buy Now</Link>
                        </div>
                        <div className="col-md-6">
                            <img src={image} width={400} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;