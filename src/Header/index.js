import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';


export default function Header(){
    return(
        <View style={styles.header}>
        <TouchableOpacity>
           <Image
           style={styles.logo}
           source={require('../img/logopet.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity>
           <Image
           style={styles.send}
           source={require('../img/pata30.png')}
           />
        </TouchableOpacity>
        </View>
    )
}
const styles= StyleSheet.create({
    header:{
        backgroundColor:'#FFF',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth:0.2,
        elevation:2
      

    },
    logo:{
        height:200,
        width:100,
        marginTop:20
        
    },
    send:{
        height:35,
        width:35,
      
    }
})