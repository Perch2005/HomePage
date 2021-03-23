import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app'
import reportWebVitals from './reportWebVitals';

const getResourse = async (url) =>{
  // const header = {
  //   'Content-Type':'applicatin/json',
  //   'Access-Control-Allow-Origin': '*'
  // }
  const res = await fetch(url
  //   ,{
  //   method:"POST",
  //   body:{
  //     username:"admin",
  //     password:"1234"
  //   },
  //   headers:header
  // }
  )
  if(!res.ok){
  throw new Error(`Could not fetch ${url}`+
  `,reseived ${res.status}`)
  }
  const body = await res.json()
  return body
}

getResourse('https://jsonplaceholder.typicode.com/posts')
.then((body) => {
console.log(body)
})
.catch((err) =>{
  console.error('Could not fetch',err)
})


ReactDOM.render(
  <React.StrictMode>
   <App/>
   {getResourse}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
