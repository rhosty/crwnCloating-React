import { CategoriesContext } from "../../../contexts/categories"
import { useContext, Fragment } from "react"
import ProductCard from "../../../comps/product card/product.card.comp"


const JacketShop = () => {

    const { categoriesMap } = useContext(CategoriesContext)
    const { jackets, id } = categoriesMap

    return(
        <Fragment>
        <div  className='shop-container'>
           <h1>Jackets</h1> 
        <div  className='products-container'>
        
             {jackets.map((product) => {
                return(
                    <ProductCard key={product.id}  product={product} />
                )})}
        </div>  
        </div>   
        </Fragment>
    )
}

export default JacketShop