import Navbar from './Navbar';
import Home from './Home';
// import './index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';
function App() {
  // const title = 'welcome to the blog';
  // const likes = 50;
  // const link = "http://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <Home/> */}
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{64}</p>
        <p>{"hello harsh"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>Math.random() * 10</p>
        <a href="{link}">GOOGLE</a> */}
        <Switch>
          <Route exact path ="/">
             <Home />
          </Route>
          <Route path ="/create">
            <Create />
          </Route>
          <Route path ="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
