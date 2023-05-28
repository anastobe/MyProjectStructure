import React from 'react';
import { RouteNames } from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.introScreens}
        component={IntroScreens}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
};

export default AuthStack;
