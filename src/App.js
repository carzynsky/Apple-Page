import React, {useState, useEffect} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar.js';
import Mac from './Mac/Mac';
import IPhone from './Iphone/iPhone';
import IPad from './Ipad/iPad';
import Home from './Home/Home';
import ThemeContext, { themes } from './theme-context';
import DarkIcon from './images/dark.png';
import LightIcon from './images/light.png';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [themeIcon, setThemeIcon] = useState(LightIcon);

  const toggleTheme = () =>{
    if(theme === themes.dark){
      setTheme(themes.light);
      setThemeIcon(LightIcon);
    }
    else{
      setTheme(themes.dark);
      setThemeIcon(DarkIcon);
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
       <Router>
        <NavBar />
        <div className='changeTheme' style={theme}>
            <img onClick={toggleTheme} src={themeIcon} className='themePic' alt=''></img>        
        </div>  
        <Switch>
          <Route exact path="/" component={() => (<Redirect to='/apple' />)} />
          <Route exact path='/apple' exact component={Home}></Route>
          <Route path='/apple/mac' component={Mac}></Route>
          <Route path='/apple/iPad' component={IPad}></Route>
          <Route path='/apple/iPhone' component={IPhone}></Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
