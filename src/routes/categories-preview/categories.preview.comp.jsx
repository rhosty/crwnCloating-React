import { UserContext } from "../../contexts/user.ctx";
import { useContext, Fragment, Link } from "react";
import { CategoriesContext } from "../../contexts/categories";
import ShopOverview from '../../comps/shopoverview/shop.overview'


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <ShopOverview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;