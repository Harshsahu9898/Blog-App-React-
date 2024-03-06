import { useState,useEffect} from 'react';
import BlogList from "./BlogList";
import useFetch from './useFetch';
const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
        // {title: 'My new website', body: 'hi this is my new website', author:'harsh',id: 1},
        // {title: 'welcome party!', body: 'hi this is party time', author:'kabir',id: 2},
        // {title: 'React Frameworks', body: 'Best frameworks in the world', author:'sujal',id: 3}
    // let name = 'harsh';
    // const [name,setName] = useState('harshu');//the value inside the bracket should be of any datatype
    // const [age,setAge] = useState(20);
    // const handleClick = () =>{
    //     setName('harsh');
    //     setAge(222);
        // name = 'harshu';
        // console.log(name);

    // const handleClick = (e)=>{
    //     console.log('hello,ninjas', e);    
    // }
    // const handleClickAgain = (name,e) =>{
    //     console.log('hello ' + name, e.target);
    // const [name,SetName] = useState('harsh');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id );
    //     setBlogs(newBlogs);
    // }
    
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs = {blogs} title= "All Blogs!"  />}  
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'harsh')} title= "Harsh Blogs!" handleDelete={handleDelete}/> */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick ={(e)=>handleClickAgain('harsh', e) }>Click me Again</button> */}
            {/* // console.log('hello'); */}
            {/* <button onClick={()=> SetName('chicken')}>change name</button> */}
            {/* <p>{name}</p> */}
        </div>
     );
}
 
export default Home;