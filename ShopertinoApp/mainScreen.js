import React from "react";
import { Image, View ,Text,StyleSheet } from "react-native";
import { ScrollView } from "react-native";

const List = [
    {
        image: require("./image/clothingImage_1.png"),
        listname: 'CLOTHING',
    },
    {
        image: require("./image/accessory.png"),
        listname: 'ACCESSORIES',
    },
    {
        image: require("./image/ladyShoes_2.png"),
        listname: 'SHOES',
    },
    {
        image: require("./image/clothingImage_1.png"),
        listname: 'CLOTHING',
    },
    {
        image: require("./image/accessory.png"),
        listname: 'ACCESSORIES',
    },
    {
        image: require("./image/ladyShoes_2.png"),
        listname: 'SHOES',
    },
]

const mainScreen = () => 
{
    const list = () =>
    {
        return List.map((item,index) =>(
            <View style={{margin: 10,  width: '441px', height: '66px',justifyContent:'center', alignItems:'center', }} key={`item_${index}`}>
                <View style = {{}}>
                    <Image style={{borderRadius: 8, }} source={item.image}/>
                    <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(0,0,0,0.5)',}}/>{}
                </View>
                <Text style={{position:'absolute',fontSize: 17, color: 'white'}}>{item.listname}</Text>
                
            </View>
        ))
    }

    return(
        <ScrollView >
            <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'space-between',borderBottomColor: '#def',borderBottomWidth: 2, paddingBottom: 3,}}>
                <View style={{marginLeft: 10,}}>
                    <Image source={require("./image/harmburger-icon.png")}/>
                </View>
                <View>
                    <Text style={{fontSize:20,}}>Shopertino</Text>
                </View>
                <View style={{marginRight: 10,paddingBottom: 2,}}>
                    <Image source={require("./image/Group6.png")}/>
                </View>
            </View>
            <ScrollView  horizontal /*pagingEnabled*/ >
                <View style={{flexDirection:'row',marginTop: 5,}}>
                    {list()}
                </View>
                
            </ScrollView>
        </ScrollView>
    );
}

// const styles = StyleSheet.create({
//     overlay:
//     {
//         ...StyleSheet.absoluteFillObject,
//     }
// })
export default mainScreen;