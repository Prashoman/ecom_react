

 class ApiUrl  {
  static BaseUrl = 'http://127.0.0.1:8000/api/';
  static VisitorDetails = this.BaseUrl+'visitor';
  static ContactUs = this.BaseUrl+'contact-us';
  static AllfooterSite = this.BaseUrl+'siteinfo';
  static CategoryDetails = this.BaseUrl+'allcategory';
  static AllProductremark (Remark){
    return this.BaseUrl+'productlistbyremark/'+Remark;
  }
  static AllProductCategory (category){
    return this.BaseUrl+"productlistbycategory/"+category;
  }
  static AllProductSubcategory(category, subcategory){
    return this.BaseUrl+'productlistbysubcategory/'+category+'/'+subcategory;
  }
  static AllSlider = this.BaseUrl+'allslider';
  static ProductDetails(code){
    return this.BaseUrl+"product/details/"+code
  }
  static Notificaton = this.BaseUrl+'notification';
  static SearchProduct(searchkey){
    return this.BaseUrl+"search/"+searchkey;
  }
}

export default ApiUrl