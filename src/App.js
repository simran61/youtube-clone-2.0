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
import LoaderProvider from "./context/loaderProvider";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
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
    <LoaderProvider>
      <themeContext.Provider value={{ darkMode }}>
        <Provider store={store}>
          <div className={`${darkMode && "dark"}`}>
            <label className="switch fixed">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
            <RouterProvider router={appRouter}>
              <Body />
            </RouterProvider>
          </div>
        </Provider>
      </themeContext.Provider>
    </LoaderProvider>
  );
}

export default App;
