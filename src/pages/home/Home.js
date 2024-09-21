import React, { useEffect } from 'react'
import './Home.css'
import { HeroData, Categories, priceDrop , bestSelling, trending, event, cosmatics} from '../../data/data'
import HeroSwiper from '../../components/heroSwiper/HeroSwiper'
import CategoriesSwiper from '../../components/categoriesSwiper/CategoriesSwiper'
import PriceDrop from '../../components/PriceDrop/PriceDrop'
import Event from '../../components/event/Event'
import { Container } from 'react-bootstrap'
import SaleSwiper from '../../components/SaleSwiper/SaleSwiper'
import Trending from '../../components/trending/Trending'
import { NavLink } from 'react-router-dom'
import Services from '../../components/services/Services'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/features/productSlice'
function Home() {   
  const dispatch = useDispatch()
  // adding id for local arrays products
  const drop_products = priceDrop.map((product, index) => product = { ...product, id: index + 100}); 
  const sale_products = bestSelling.map((product, index)=> product = {...product, id: index + 100});
  const trending_products = trending.map((product, index) => product = { ...product, id: index + 100}); 
  const cosmatics_products = cosmatics.map((product, index)=> product = {...product, id: index + 100});

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return<main>

        <section className='hero__section'>
          <Container fluid>
            <HeroSwiper  products = {HeroData}  />
            <Services />
          </Container> 
        
        </section>

        <section className='categoreis'>
        <div className='maintitle'><h6>Shop By Category</h6></div>
          <Container fluid>
          <CategoriesSwiper products={Categories} />
          </Container>
            
        </section>

        <section className='price__drop'>
          <div className='section__title'><h6>PriceDrop</h6> <NavLink to={'/shop'} className='view__all'>View</NavLink></div>
          <Container fluid>
            <PriceDrop products={drop_products} />
          </Container>  
        </section>


        <section className='sale__section'>
        <div className='maintitle'><h6>Featured Products</h6><p>Top View In the Week</p></div>
        <Container fluid>
          <SaleSwiper products = {sale_products} />
        </Container>
        </section>

        <section className='trending'>
          <Container fluid>
            <Trending products={trending_products} />
          </Container>
        </section>

        <section className='events'>
          <Container>
            <Event products={event} />
          </Container>
        </section>

        <section className='sale__section'>
        <div className='maintitle'><h6>Beauty & Health</h6><p>Top View In the Week</p></div>
        <Container fluid>
          <SaleSwiper products = {cosmatics_products} />
        </Container>
        </section>

        <section className='news__letter'>
          <h2>Subscribe to our Newsletter</h2>
          <p>Get the latest updates, special offers, and exclusive deals on your inbox.</p>
          <form>
            <input type='email' placeholder='Enter your email' required />
            <button type='submit'>Subscribe</button>
          </form>
        </section>

  </main>
}

export default Home