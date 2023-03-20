import CategoryItem from "../categories/category.comp"
import { Link } from "react-router-dom"
import './directory.style.scss'


const Directory = ({categories}) => {
    return(
        <div className='categories-container' >
        {categories.map(({ id, title, imageUrl }) => (
          // <Link  to={`${title}`}>
          <CategoryItem  key={id} category={{ id, title, imageUrl }} />
          // </Link>
        ))}
      </div>
    )
   
}

export default Directory