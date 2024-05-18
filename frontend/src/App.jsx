import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  useEffect(() => {
    axios.get("http://localhost:5000/products").then(res => {
      console.log(res.data)
      setData([...res.data])
    })
  }, [])
  return (
    <>
      <MainContext.Provider value={{ data, setData }}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
