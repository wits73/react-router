This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It is about to [React Route](https://github.com/ReactTraining/react-router).

## Table of Contents

- [Introducing and Setting Project](#introducing-and-setting-project)
- [Default setting for React Router](#default-setting-for-react-router)
- [Setting Sub Router](#setting-sub-router)

## Introducing and Setting Project

* `create-react-app` Installing the react with global options like `yarn global add create-react-app` or `npm install create-react-app -g`
* `react-router-dom` Installing the react-router-dom `yarn add react-router-dom` or `npm i react-router-dom -s`

## Default setting for React Router

* `BrowserRouter as Router, Route` Type the BrowserRouter for App.js
```
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home  from './routes/Home';
import About  from './routes/About';
import Posts  from './routes/Posts';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about/:username" component={About} />
        <Route path="/posts" component={Posts} />
      </div>
    </Router>
  );
};

export default App;
```
* `components/Header.js` The Header includes Link from react-router-dom
```
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = props => {
    return (
        <div className="header">
            <Link to="/" className="item">Home</Link>
            <Link to="/about/wits73" className="item">About</Link>
            <Link to="/posts" className="item">Posts</Link>
        </div>
    );
};

export default Header;
```

* `routes/About.js Home.js, Posts.js`
```
import React from 'react';

const Posts = () => {
    return (
        <div>
            Post
        </div>
    );
};

export default Posts;
```

* `/about/:username` Setting URL Parameter to App.js
```
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home  from './routes/Home';
import About  from './routes/About';
import Posts  from './routes/Posts';

import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about/:username" component={About} />
        <Route path="/posts" component={Posts} />
      </div>
    </Router>
  );
};

export default App;
```

## Setting Sub Router

* Setting Sub Route to Posts.js
```
import React from 'react';
import {Route, Link} from 'react-router-dom';

const Post = ({match}) => {
    return (
        <h2>
            {match.params.title}
        </h2>
    )
}

const Posts = () => {
    return (
        <div>
            <h1>포스트</h1>
            <Link to="/posts/react">React</Link>
            <Link to="/posts/redux">Redux</Link>
            <Link to="/posts/relay">Relay</Link>
            <Route 
                path="/posts/:title"
                component={Post}
            />
        </div>
    );
};

export default Posts;
```
* Set Active Route Style Using NavLink
```
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = props => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink to="/about/wits73" className="item" activeClassName="active">About</NavLink>
            <NavLink to="/posts" className="item" activeClassName="active">Posts</NavLink>
        </div>
    );
};
export default Header;
```
* `routes/Mypage.js`Redirecting to the Redirect Component
```
import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;
const Mypage = () => {
    return (
        <div>
            {
                !logged && <Redirect to="/login"/>
            }
            Mypage
        </div>
    );
};
export default Mypage;
```
* `routes/Home.js` Redirecting from method using history.push
```
import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            Home
            <button onClick={() => {history.push('/posts')}}>
                BTN
            </button>
        </div>
    );
};

export default Home;
```
* `routes/Search.js` Invoking query parameter
```
import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            {location.search} Search   {new URLSearchParams(location.search).get('keyword')}
        </div>
    );
};

export default Search;
```
* `routes/App.js` Page 404 using Switch
```
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Login from './routes/Login';
import Mypage from './routes/Mypage';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>

        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/mypage" component={Mypage} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
```