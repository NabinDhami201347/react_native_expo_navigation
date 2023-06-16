import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Class, College, University } from "../screens/top";

const Top = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="Class" component={Class} />
      <Top.Screen name="College" component={College} />
      <Top.Screen name="University" component={University} />
    </Top.Navigator>
  );
};

export default TopTabs;
