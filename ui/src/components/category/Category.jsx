import React from 'react'
import './category.scss'
import { STATUS } from '../../utils/status'
import Error from '../error/Error'
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom';

const Category = ({categories,status}) => {
    if(status===STATUS.ERROR) return (<Error/>);
    if(status===STATUS.LOADING) return (<Loader/>);
    
   // console.log(categories)
  return (
    <section className='category py-3'>
        <div className="container">
            <div className="category-content">
                <div className="section-title">
                    <h3>Category</h3>
                </div>
                <div className="category-items">
                    {
                        categories.map((cat)=>(
                            <Link to={`category/${cat.id}`} key={cat.id}>
                                <div className="category-item">
                                    <div className="cat-img">
                                        <img src={cat.image} alt={cat.name}/>
                                    </div>
                                    <div className="category-item-name">
                                        <h6>{cat.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Category