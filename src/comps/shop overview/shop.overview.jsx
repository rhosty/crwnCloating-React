import { CategoriesContext } from "../../contexts/categories";
import { useContext, Fragment } from "react";
import ProductCard from "../product card/product.card.comp";
import "./shop.overview.style.scss";

const ShopOverview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].slice(0,4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ShopOverview;
