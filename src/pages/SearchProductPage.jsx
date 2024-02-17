import React, { useEffect, useState } from 'react';
import MasterLayout from './../components/MasterLayout/MasterLayout';
import ProductCard from '../components/Products/ProductCard';
import { useParams } from 'react-router-dom';
import { ProductBySearchRequest } from '../API/apiRequiest';
import ProductsSkeleton from '../Skeleton/ProductsSkeleton';

const SearchProductPage = () => {
    const [data,setData] = useState([]);
    let {keyword} = useParams()
    useEffect(()=>{
        (async()=>{
            const result = await ProductBySearchRequest(keyword);
            setData(result)
        })()
    },[data])
    if(data.length===0){
        return(
            <MasterLayout>
                <ProductsSkeleton/>
            </MasterLayout>
        )
    }else{
        return (
            <MasterLayout>
                <div className='py-5'>
                <ProductCard data={data}/>
                </div>
            </MasterLayout>
        );
    }

};

export default SearchProductPage;