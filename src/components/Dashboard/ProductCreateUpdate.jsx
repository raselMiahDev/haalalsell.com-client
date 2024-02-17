import React, { useState } from 'react';

const ProductCreateUpdate = () => {
    const [formData,setFormData]=useState({
        categoryName:"",
        categoryImage:""
    })
    const onSubmit = ()=>{
        alert(formData.categoryName)
    }
    const handleChange = (property,value)=>{
        setFormData({...formData,[property]:value});
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Product Title</label>
                    <input type="text" onChange={(e)=>handleChange("categoryName",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Short Description</label>
                    <input type="text" onChange={(e)=>handleChange("categoryName",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Price</label>
                    <input type="text" onChange={(e)=>handleChange("categoryName",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Discount Price</label>
                    <input type="text" onChange={(e)=>handleChange("categoryName",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Stock</label>
                    <input type="text" onChange={(e)=>handleChange("categoryName",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Remark</label>
                    <input type="text" onChange={(e)=>handleChange("categoryName",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Category</label>
                    <select name="" className='form-control-sm  form-control'>
                        <option value="hp">laptop</option>
                        <option value="hp">Mobile</option>
                    </select>
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Brand</label>
                    <select name="" className='form-control-sm  form-control'>
                        <option value="hp">laptop</option>
                        <option value="hp">Mobile</option>
                    </select>
                </div>

                <div className="col-md-12">
                    <label className='pb-2'>Product Image</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className='pt-4 col-md-6'>
                    <button onClick={onSubmit} className='btn btn-success'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCreateUpdate;