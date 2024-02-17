import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductByCategory from './pages/ProductByCategory';
import ProductByBrand from './pages/ProductsByBrand';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import SearchProductPage from './pages/SearchProductPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProductCreateUpdatePage from './pages/Dashboard/ProductCreateUpdatePage';
import AddProductDetailsPage from './pages/Dashboard/AddProductDetailsPage';
import AddCategoryPage from './pages/Dashboard/AddCategoryPage';
import AddBrandPage from './pages/Dashboard/AddBrandPage';
import { getUserDetails } from './helper/SessionHelper';
import BrandListPage from './pages/Dashboard/BrandListPage';

const App = () => {
  const userInfo = getUserDetails()
  if(userInfo?.role==="admin"){
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashboardPage/>}/>
            <Route path='/dashboard/productCreateUpdate' element={<ProductCreateUpdatePage/>}/>
            <Route path='/dashboard/AddProductDetails' element={<AddProductDetailsPage/>}/>
            <Route path='/dashboard/AddCategory' element={<AddCategoryPage/>}/>
            <Route path='/dashboard/AddBrand' element={<AddBrandPage/>}/>
            <Route path='/dashboard/BrandList' element={<BrandListPage/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }else{
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<ProductDetails/>}/>
            <Route path="/product-by-brand/:brand" element={<ProductByBrand />} />
            <Route path="/product-by-category/:category" element={<ProductByCategory />}/>
            <Route path='/product-by-search/:keyword' element={<SearchProductPage/>}/>
            <Route path='/cart-list' element={<CartPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signUp' element={<SignUpPage/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};

export default App;