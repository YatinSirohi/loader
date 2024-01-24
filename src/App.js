import { useEffect, useState } from "react";
import "./App.css";
import HelloWelcome from "./hello";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });
  return (
    <div className="App">
      {isloading === true ? (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
          
        />
      ) : (
        <HelloWelcome />
      )}
    </div>
  );
}

export default App;
