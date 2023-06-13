import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { logOut } from "../Redux/Auth/auth-operations";
import DefaultPostsScreen from "./DefaultPostsScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import { Feather } from "@expo/vector-icons";

const NestedStack = createStackNavigator();

export default function PostsScreen() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          title: "Публікації",
          headerTitleStyle: {
            fontFamily: "rb-med",
          },
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={{ paddingRight: 10 }}
              onPress={handleLogOut}
            />
          ),
        }}
      />
      <NestedStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerTitleStyle: {
            fontFamily: "rb-med",
          },
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
      <NestedStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Локація",
          headerTitleStyle: {
            fontFamily: "rb-med",
          },
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
    </NestedStack.Navigator>
  );
}
