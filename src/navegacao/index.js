import React from "react"
import { SafeAreaView, Text } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import Drawer from './Drawer';
import Tab from "./Tab";

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            {/* <Drawer /> */}
            <Tab/>
        </NavigationContainer>
    </SafeAreaView>
)