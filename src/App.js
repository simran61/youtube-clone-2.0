import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { useState } from "react";
import { themeContext } from "./context/context";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <themeContext.Provider value={{ darkMode }}>
      <Provider store={store}>
        <div className={`${darkMode && "dark"}`}>
          <label class="switch fixed">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span class="slider round"></span>
          </label>
          <Head />
          <RouterProvider router={appRouter} />
          <Body />
        </div>
      </Provider>
    </themeContext.Provider>
  );
}

export default App;
