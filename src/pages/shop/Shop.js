import React from 'react';
import './Shop.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/features/productSlice';
import { useState , useEffect} from 'react';
import Product from '../../components/productCard/Product';
import { MdClose } from 'react-icons/md';
import { CiMenuBurger } from 'react-icons/ci';
const Shop = () => {
  const products = useSelector((state) => state.products);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const dispatch = useDispatch();

// start sidebar handle width 
const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    const isWide = window.innerWidth > 767;
    setIsWideScreen(isWide);
    if (isWide) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

const toggleMenu = () => {
  if (!isWideScreen) {
    setMenuOpen(!menuOpen);
  }
};
// end sidebar width handeling 



  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFiltered(products);
    const uniqueCategories = [...new Set(products.map(product => product.main_category))];
    const uniqueSubCategories = [...new Set(products.map(product => product.sub_category))];
    setCategories(uniqueCategories);
    setSubCategories(uniqueSubCategories);
  }, [products]);

  const filterCategory = (category) => {
    if (category === 'all') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(product => product.main_category === category));
    }
  };

  const filterSubCategory = (subCategory) => {
    if (subCategory === 'all') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(product => product.sub_category === subCategory));
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFiltered(products.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    ));
  };

  return (
    <div className="products__page">
      
      <div className={`main__categories_sidebar ${menuOpen ? ' show__categories' :''}`} id='sidebar'>
        <div className='main__categories'>
          <h5>Categories</h5>
          <ul onClick={toggleMenu}>
            <li key="all" onClick={() => filterCategory('all')}>All categoreis</li>
            {categories.map(cat => (
              <li key={cat} onClick={() => filterCategory(cat)} >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='products__container'>

          <div className='products__filters'>
            <div className='toggle__btn' onClick={toggleMenu}>{menuOpen ? <MdClose  className='close__btn'  /> : <CiMenuBurger  className='show__btn' /> }</div>
            <div className='search__bar'>
                  <input type="text" placeholder="find your products..." value={search} onChange={handleSearch} />
            </div>
            <div className="subcategories">
              <select id="subcategories__list" onChange={(e) => filterSubCategory(e.target.value)}>
                <option  value="all">sub-categoreis</option>
                {subCategories.map(subCat => (
                  <option  key={subCat} value={subCat} onClick={toggleMenu} >{subCat}</option>
                ))}
              </select>
            </div>
          </div>
                
          <div className='products__content'>
            <div className='products__list'>
              {filtered.map((product, index) => (
                <Product 
                  key={index}
                  product={product} 

                />
              ))}
            </div>


    
          </div>
      </div>

    </div>
  );
};

export default Shop;

