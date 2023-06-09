import './category.comp.style.scss'
import { Link } from 'react-router-dom';
// import { CategoryContainer, CategoryContainerCover,BackgroundImage, CategoryBodyContainer } from './category.comp.style.jsx';

const CategoryItem = ({ category }) => {
    const {title, imageUrl} = category;
    return(
      
        <div className="category-container-cover">
        <div className='background-image' style={{
          backgroundImage : `url(${imageUrl})`
        }}>
        </div>
        <div className="category-body-container">
          <Link  to={`/shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
          </Link>
        </div>
    
      </div>
      
    )
   
}

export default CategoryItem