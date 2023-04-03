import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories";
import ProductCard from "../../comps/product card/product.card.comp";
import './category.list.styles.scss'


const CategoryListing = () => {
    
        const {category} = useParams();
        const {categoriesMap} = useContext(CategoriesContext);
        const [products, setProducts] = useState(categoriesMap[category]);
        useEffect(() => {
            setProducts(categoriesMap[category]);
        }
        , [category, categoriesMap]);

        return(
            <div className="category-container">
                {
                     products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        )
    
}

export default CategoryListing;