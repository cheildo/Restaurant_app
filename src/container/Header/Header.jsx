import React from 'react'
import './Header.css';
import {images} from '../../constant/index';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__header-info">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">The key to Fine dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie.<br/>Condimentum volutpat morbi facilisis quam scelerisque<br/>sapien. Et, penatibus aliquam amet tellus </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>

    </div>
  )
}

export default Header