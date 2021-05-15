import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";

import Navigation from "./src/services/navigation";

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
    SplashScreen.hide();
    setTimeout(() => {
      setIsLoaded(true);
    }, 1350);
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
