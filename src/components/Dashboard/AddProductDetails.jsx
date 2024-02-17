import React, { useState } from 'react';

const AddProductDetails = () => {
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
                <div className="col-md-6">
                    <label className='pb-2'>Image-1</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-2</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-3</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-4</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-5</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-6</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-7</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-8</label>
                    <input type="file" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Color</label>
                    <input type="text" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Size</label>
                    <input type="text" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Description</label>
                    <input type="text" onChange={(e)=>handleChange("categoryImage",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Product Id</label>
                    <select name=""  className='form-control-sm form-control'>
                        <option value="laptop">laptop</option>
                        <option value="laptop">laptop</option>
                    </select>
                </div>






                <div className='pt-4 col-md-6'>
                    <button onClick={onSubmit} className='btn btn-success'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default AddProductDetails;