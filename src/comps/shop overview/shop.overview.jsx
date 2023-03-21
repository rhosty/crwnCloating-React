import { ProductContext } from "../../contexts/products.ctx"
import { useContext } from "react"
import ProductCard from "../product card/product.card.comp"
import './shop.overview.style.scss'

const ShopOverview = () => {
    
    const {products} = useContext(ProductContext)
    
    return(
      <div className="products-container">
        {/* <h2>Hats</h2> */}
        {products.map((product) => {
            return(
                <ProductCard key={product.id} product={product}/>
            )})}
      </div>
    )

  }

  export default ShopOverview