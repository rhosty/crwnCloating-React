import { ProductContext } from "../../contexts/products.ctx"
import { useContext } from "react"
import ProductCard from "../product card/product.card.comp"
import './shop.overview.style.scss'

const ShopOverview = () => {
    
    const {products} = useContext(ProductContext)
    
    return(
      <div>
        <h2>Hats</h2>
      <div className="products-container">
        {products.slice(0,4).map((product) => {
            return(
                <ProductCard key={product.id} product={product}/>
            )})}
      </div>
      </div>
    )

  }

  export default ShopOverview