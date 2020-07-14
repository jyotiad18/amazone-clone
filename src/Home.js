import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
          <Product
            id="2"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
          <Product
            id="3"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
          <Product
            id="4"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
          <Product
            id="12333"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
          <Product
            id="12333"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
        </div>
        <div className="home__row">
          <Product
            id="12333"
            title="3 in 1 Business Man Backpack with USB "
            price={49.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3GhQdf6gaatreRRJDL-6aBW-c083epT9_Emi8nPMwISVP4FZlmL4rATcU"
          />
        </div>
      </div>
    );
}

export default Home;
