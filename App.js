import React from "react";
import { StyleSheet,View,Text } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import Search from './components/Search'
import About from './components/About'
import { TabNavigator } from "react-navigation";
// import all used images

const Tabs = TabNavigator({
    Search:{ screen: Search },
    About:{ screen: About }
});

export default class App extends React.Component {


render(){
    return(
        <Tabs/>
    );
}
}
const styles=StyleSheet.create({
        container:{
            alignItem:"center",
            flex:1,
            backgroundColor:'#fff',
            marginHorizontal:40

        }
}

);
