import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import mainScreen from "./mainScreen";
import infProduct from "./infProduct";
import payment from "./paymentProduct";


const Stack = createStackNavigator();
const managerScreen = () =>
{
    return(
        <NavigationContainer>
            <Header>
                {mainScreen}
            </Header>
        </NavigationContainer>
    );
}

const Header = () =>
{
    return(
        <Stack.Navigator>
                <Stack.Screen 
                    options={{
                        headershown:false,
                        tabBarLabel: '',
                      tabBarIcon: () => (
                        <Image source={require("./image/harmburger-icon.png")}/>
                      ),
                    }}/>
                <Stack.Screen name="Shopertino" component={mainScreen} />
                {/* <Stack.Screen name="infProduct" component={infProduct} />
                <Stack.Screen name="paymentProduct" component={payment} /> */}
            </Stack.Navigator>
    );
}

export default managerScreen;