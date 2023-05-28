import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import MainStack from '@/routes/mainStack';
import AuthStack from '@/routes/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const StackNav = ({handleNav}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {true ? (
        <MainStack /> //nested app screens
      ) : (
        <AuthStack /> //auth screens
      )}
    </View>
  );
};

export default StackNav;
