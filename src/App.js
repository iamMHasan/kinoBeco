import logo from './logo.svg';
import { RouterProvider} from 'react-router-dom';
import { router } from './routes/routes';


function App() {
  
  return (
    <div className="max-w-[1240px] mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
