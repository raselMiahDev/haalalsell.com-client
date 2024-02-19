import { DeleteProductRequiest } from "../../API/AdminApiRequiest";
import toast, { Toaster } from "react-hot-toast";
const BrandAndCategoryList = (props) => {
  
  const handleSubmit =async (id)=>{
    await DeleteProductRequiest(id).then((res)=>{
      console.log(res)
      if(res.status==true){

        toast.success(res.message)
      }
    })
  }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Star</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

            {
                props.data.map((item,i)=>{
                    return(
                        <tr>
                            <th scope="row">{i+1}</th>
                            <td>
                                <img src={item['image']} width={50} alt="" />
                            </td>
                            <td>{item['title']}</td>
                            <td>{item['star']}</td>
                            <td>{item['stock']}</td>
                            <td>{item['price']}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-success btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={()=>handleSubmit(item['_id'])}>Delete</button>
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
