import Navbar from './Navbar';
import Home from './Home';
import './index.css';

function App() {
  // const title = 'welcome to the blog';
  // const likes = 50;
  // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{64}</p>
        <p>{"hello harsh"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>Math.random() * 10</p>
        <a href="{link}">GOOGLE</a> */}
      </div>
    </div>
  );
}

export default App;
