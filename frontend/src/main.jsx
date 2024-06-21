import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomeScreen from './screens/HomeScreen.jsx';
import SaveScreen from './screens/SaveScreen.jsx';
import CustomerScreen from './screens/CustomerScreen.jsx';
import SearchScreen from './screens/SearchScreen.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index={true} path='/' element={ <HomeScreen /> } />
      <Route path='/save' element={<SaveScreen />} />
      <Route path='/measurements' element={<CustomerScreen />} />
      <Route path='/search/:query' element={<SearchScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  </Provider>
)
