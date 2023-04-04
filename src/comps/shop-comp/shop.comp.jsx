import { UserContext } from "../../contexts/user.ctx";
import { useContext, Fragment, Link } from "react";
import { CategoriesContext } from "../../contexts/categories";
// import ShopOverview from "../shopoverview/shop.overview";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from '../../routes/categories-preview/categories.preview.comp';
import CategoryListing from "../../routes/category/category.comp";
import ShopOverview from "../shopoverview/shop.overview";


const ShopComp = () => {
  return (
   <Routes>
    <Route index element={<ShopOverview />}></Route>
    <Route path=":category" element={<CategoryListing />}></Route>

   </Routes>
  );
};

export default ShopComp;
