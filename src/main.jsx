import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from"./store/store.js"
// import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>
//   <GoogleOAuthProvider clientId="835906511017-ctsfcjbgp1tgk3ovucktg0ho7sa9vqc6.apps.googleusercontent.com">
  
// </GoogleOAuthProvider>

  
  
)
