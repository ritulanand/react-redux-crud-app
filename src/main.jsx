import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import UserReducer from './UserReducer.jsx';
import App from './App.jsx'
import './index.css'


const store = configureStore({
  reducer: {
      users: UserReducer
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode >
        <App />
      </StrictMode>,
  </Provider>
 
)
