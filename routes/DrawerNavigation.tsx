import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed, Home, Settings, Notifications } from "../screens/drawer";

import TabNavigation from "./TabNavigation";
import TopTabs from "./TopTabs";
import ProfileImage from "../components/ProfileImage";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: () => <ProfileImage />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Profile" component={TopTabs} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Academics" component={TabNavigation} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
