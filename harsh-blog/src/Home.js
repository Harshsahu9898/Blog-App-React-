import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'hi this is my new website', author:'harsh',id: 1},
        {title: 'welcome party!', body: 'hi this is party time', author:'kabir',id: 2},
        {title: 'React Frameworks', body: 'Best frameworks in the world', author:'sujal',id: 3}
    ]); 

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
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title= "All Blogs!" />
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick ={(e)=>handleClickAgain('harsh', e) }>Click me Again</button> */}
            {/* // console.log('hello'); */}
        </div>
     );
}
 
export default Home;