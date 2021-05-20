import React from 'react'
import {BrowserRouter as Router , Route,Switch ,Link } from 'react-router-dom'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost';
import PostList from './components/PostList'
import Register from './components/Register';



const App = () => {
   
  return (
    <div>
      <Router>
        <div>
          <div>
            <nav>
              <ul className="d-flex m-3 ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add Post</Link>
                </li>
                <li>
                  <Link to="/edit">Edit</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
           
            <Switch>
              <Route path="/" exact>
                <PostList />
              </Route>
              <Route path="/add">
                <AddPost />
              </Route>
              <Route path="/edit">
                <EditPost />
              </Route>
              <Route path="/register">
                <Register/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App

