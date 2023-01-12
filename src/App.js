import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Spinner from './Pages/Shared/Spinner/Spinner';
import router from './Routes/Routes/Routes';

function App() { 
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  },[])

  return (
    <div className='max-w-[1440] mx-auto'>
      {
        loading ? <Spinner></Spinner>
        :
        <div>
          <RouterProvider router={router}></RouterProvider>
          <Toaster></Toaster>
        </div>
      }
      
    </div>
  );
}

export default App;