import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
 import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
<BrowserRouter>
      <Switch>
        <Route path="/" component={<App/>}></Route>
      </Switch>
    </BrowserRouter>
 */
