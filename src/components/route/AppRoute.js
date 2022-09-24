import React, { Component, Fragment } from 'react'
import {
  
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
import AboutPage from '../page/AboutPage';
import CartPage from '../page/CartPage';
import CategoryDetailsPage from '../page/CategoryDetailsPage';
import ContactUs from '../page/ContactUs';
import FevaratePage from '../page/FevaratePage';
import HomePage from '../page/HomePage'
import NotificationPage from '../page/NotificationPage';
import PrivacyPage from '../page/PrivacyPage';
import ProductDetails from '../page/ProductDetails';
import PurchasePage from '../page/PurchasePage';
import RefundPage from '../page/RefundPage';
import SubCategoryDetails from '../page/SubCategoryDetails';
import UserLoginPage from '../page/UserLoginPage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<UserLoginPage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/purchase" element={<PurchasePage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/refund" element={<RefundPage/>} />
        <Route path="/product-details" element={<ProductDetails/>} />
        <Route path="/notification" element={<NotificationPage/>} />
        <Route path="/faverate-item" element={<FevaratePage/>} />
        <Route path="/cart-items" element={<CartPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/productcategory/:category" element={<CategoryDetailsPage/>} />
        <Route path="/productSubcategory/:category/:subcategory" element={<SubCategoryDetails/>} />
        
        
      </Routes>
      
      </Fragment>
    )
  }
}

export default AppRoute