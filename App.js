import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { useFonts } from "expo-font";
import Main from "./Components/Main";

export default function App() {

  const [fontLoaded] = useFonts({
    "rb-reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "rb-med": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
