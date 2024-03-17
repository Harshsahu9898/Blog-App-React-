import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const[isPending,setIsPending] = useState(true); 
    const[error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url,{signal: abortCont.signal})
            .then(res => {
                // return res.json()
                if(!res.ok){
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data =>{
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null)
            })
        .catch(err=>{
            // console.log(err.message);
            if(err.name=== 'AbortError'){
                console.log('fetch aborted')
            }else{
            setIsPending(false);
            setError(err.message);
            }
        })
        // console.log('i am harsh');
        // console.log(blogs);
        // console.log(name);
    },1000);
    return () => abortCont.abort();
},[url]);

return {data,isPending,error}

}

export default useFetch;