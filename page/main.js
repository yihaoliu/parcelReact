import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import url from './img/bg.png'
ReactDOM.render(
  <h1>Hello, world!<img src={url}/></h1>,
  document.getElementById('app')
)