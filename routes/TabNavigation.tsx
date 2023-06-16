import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Progress, Syllabus, Notes } from "../screens/tabs";

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Syllabus" component={Syllabus} />
      <Tab.Screen name="Notes" component={Notes} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
