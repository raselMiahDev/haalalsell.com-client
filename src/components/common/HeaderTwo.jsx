import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Logo from "../../assets/images/logo.png"
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import {CategoryListRequest} from "../../API/apiRequiest"
import { getToken, removeSession } from "../../helper/SessionHelper";

const HeaderTwo = ()=> {
  const [searchKeyword,setSearchKeyword]=useState("")
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let result = await CategoryListRequest();
      setCategories(result);
    })();
  }, []);


  const onSearch = () => {
    if(searchKeyword.length===0){
      toast.error("Search Keyword Required!");
    }
    else{
      navigate("/product-by-search/"+searchKeyword)
    }
  }
  const handleLogOut = ()=>{
    removeSession()
  }
  return (
    <Navbar expand="lg" className="shadow-sm py-3 bg-dark">
      <Container>
        <Link to="/">
            <img src={Logo} width={200} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
                <select className="select_category">
                    <option value="">All category</option>
                    {categories.map(category => (
                    <option key={category?.['_id']} value={category?.['_id']} > {category?.['categoryName']} </option>
                     ))}
                </select>
                <input onChange={(e)=>setSearchKeyword(e.target.value)} className="search_bar border-start" type="text" placeholder="Search For Products"/>
                <button onClick={onSearch} className="btn btn-outline-dark" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 24, height: 24 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
              </button>
            </Form>
          </Nav>
          <Nav>

            {
              getToken() ? (
                <>
                  <Link className="px-1" to="/cart-list">
                    <PiShoppingCartLight size={30} color="#ffd600"/>
                  </Link>
                  <button onClick={handleLogOut} className="btn btn-outline-warning btn-sm">Log Out</button>
                </>
              ):(
                <>
                  <Link to="/login" className="text-white px-1 btn btn-warning btn-sm px-3">Login</Link>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderTwo;