import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from"./store/store.js"
import { AuthProvider } from './Components/Auth/useAuth.jsx'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <AuthProvider>
    <App />
    </AuthProvider>
  </Provider>

  
  
)
