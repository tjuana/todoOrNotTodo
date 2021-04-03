 import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
 import BlogItem from './BlogItem'
 import axios from 'axios'
 
 export class Blogs extends Component {
     state = {
         blogs: [],
         isLoaded: false
     }
     componentDidMount() {
         axios.get('/wp-json/wp/v2/blogs')
         .then(res => this.setState({
             blogs: res.data,
             isLoaded: true
         }))
         .catch(err => console.log(err))
     }

     render() {
         const { blogs, isLoaded } = this.state

         if (isLoaded) {
         return (
             <div>
                <Link to='/'> go back </Link>
                 { blogs.map( blog => (
                     <BlogItem
                        blog={blog}
                        key={blog.id}
                     >
                     </BlogItem>
                 ))}
             </div>
         )}
         
         return <h3>Loading...</h3>
     }
 }
 
 export default Blogs
 