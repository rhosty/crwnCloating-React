import '../categories/category.comp.style.scss'
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const {title, imageUrl} = category;
    return(
      
        <div className="category-container">
        <div className='background-image' style={{
          backgroundImage : `url(${imageUrl})`
        }}>
        </div>
        <div className="category-body-container">
          <Link  to={`${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
          </Link>
        </div>
    
      </div>
      
    )
   
}

export default CategoryItem