import React from 'react';
import { SafeAreaView, StatusBar, ActivityIndicator, View } from 'react-native';
import Constants from "./Constants/Constants";
import Dashboard from './Screens/Dashboard';
import SignIn from './Screens/SignIn';
import Wallet from './Scripts/Wallet';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        fetching:false,
        wallet: null
      };
    }

    componentDidMount(){ 
      // go off and fetch wallets.. 
      this.setState({wallet:new Wallet()}); 
    }

    render(){
      let content;
      if(this.state.fetching) content = <View style={{height:'100%', justifyContent:"center", alignContent:'center'}}><ActivityIndicator  /></View>;
      else content = (this.state.wallet != null) ? <Dashboard Wallet={this.state.wallet} /> : <SignIn />;
      
      return (
          <SafeAreaView style={{ backgroundColor:Constants.black, height:'100%' }}>
            <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
            {content}
          </SafeAreaView>
        );
      }
  }
  
export default App;