import React from 'react'
import { useParams } from 'react-router-dom'

const NewBlog = () => {
    let {id}=useParams()
  return (
    <div>NewBlog
     
        <form action="">
            <input type="text" placeholder='please enter your blog' />
        </form>
    </div>

  )
}

export default NewBlog