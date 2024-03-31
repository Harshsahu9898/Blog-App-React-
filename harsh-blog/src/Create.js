import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title,setTitle] = useState(' ');
    const [body,setBody] = useState(' ');
    const [author,setAuthor] = useState('harsh');
    const [IsPending,setIsPending] = useState(false);
    const History = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title,body,author}
        setIsPending(true);

        // console.log(blog)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog Added");
            setIsPending(false)
            History.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                required
                value={title} 
                onChange={(e)=> setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="harsh">harsh</option>
                    <option value="sujal">sujal</option>
                </select>
                {!IsPending && <button>Add Blog</button>}
                { IsPending && <button disabled>Adding blog...</button>}
            </form>
            {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
        </div>
     );
}
 
export default Create;