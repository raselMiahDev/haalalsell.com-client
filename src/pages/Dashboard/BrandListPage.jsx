import React, { useEffect, useState } from 'react';
import DashboardLayOut from '../../components/Dashboard/DashboardLayOut';
import { BrandListRequest } from '../../API/apiRequiest';
import BrandAndCategoryList from '../../components/Dashboard/Brand&CategoryList';
import ProductsSkeleton from "../../Skeleton/BrandsSkeleton";
const BrandListPage = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        (async()=>{
            const result =await BrandListRequest()
            setData(result)
        })();
    },[0])
    console.log(data)
    if (data.length === 0) {
        return (
          <DashboardLayOut>
            <ProductsSkeleton />
          </DashboardLayOut>
        );
      } else {
        return (
          <DashboardLayOut>
            <div className='container'>
                <h2>Brand List</h2>
            <BrandAndCategoryList data={data} />
            </div>
          </DashboardLayOut>
        );
      }
};

export default BrandListPage;