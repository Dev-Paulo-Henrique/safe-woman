import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import 'react-native-gesture-handler'

import Routes from './src/routes';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <> 
      <StatusBar barStyle="light-content" backgroundColor="#181b23" />
      <Routes />
    </>
  );
}