import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function Home() {

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "PostsScreen") {
            return <Ionicons name="grid-outline" size={24} color={color} />;
          } else if (route.name === "CreatePostsScreen") {
            return <Feather name="plus" size={24} color={color} />;
          } else if (route.name === "ProfileScreen") {
            return <Feather name="user" size={24} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ffffff",
        activeBackgroundColor: "#FF6C00",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleStyle: {
            fontFamily: "rb-med",
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={{ paddingRight: 10 }}
              onPress={() => {}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleStyle: {
            fontFamily: "rb-med",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
