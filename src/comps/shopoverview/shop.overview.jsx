import { CategoriesContext } from "../../contexts/categories";
import { useContext, Fragment, Link , } from "react";
import ProductCard from "../product card/product.card.comp";
import "./shop.overview.style.scss";
import { Route, Routes } from "react-router-dom";


const ShopOverview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          {/* <Link to={`/shop/${title}`}> */}
            <h2>
              <span>{title.toUpperCase()}</span>
            </h2>
          {/* </Link> */}
          
          <div className="products-container">
            {categoriesMap[title].slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ShopOverview;

