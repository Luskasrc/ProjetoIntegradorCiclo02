const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import PlantDetail from "./screens/PlantDetail";
import ItemStory from "./components/ItemStory";
import HomeListV2 from "./screens/HomeListV2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PlantDetail"
              component={PlantDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeListV2"
              component={HomeListV2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
