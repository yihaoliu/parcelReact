import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import url from './img/bg.png'
import BasicExample from './router'
ReactDOM.render(
  <h1><BasicExample />
  Hello, world!<img src={url}/></h1>,
  document.getElementById('app')
)