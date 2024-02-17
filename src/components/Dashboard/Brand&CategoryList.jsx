import React from "react";

const BrandAndCategoryList = (props) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Products</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

            {
                props.data.map((item,i)=>{
                    return(
                        <tr>
                            <th scope="row">{i++}</th>
                            <td>
                                <img src={item['brandImg']} width={50} alt="" />
                            </td>
                            <td>{item['brandName']}</td>
                            <td>{item['brandName']}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-success btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }

        </tbody>
      </table>
    </div>
  );
};

export default BrandAndCategoryList;
