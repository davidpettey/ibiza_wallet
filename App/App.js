import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Constants from "./Constants/Constants";
import Dashboard from './Screens/Dashboard';
import SignIn from './Screens/SignIn';

const App = () => {
    const [signedIn, setSignedIn] = useState(true);
    
    return (
      <SafeAreaView style={{ backgroundColor:Constants.black }}>
        <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
        {
          signedIn ? 
            <Dashboard /> :
            <SignIn />
        }
      </SafeAreaView>
    );
  }
  
export default App;