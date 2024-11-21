import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, StatusBar} from 'react-native' 
import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText } from 'moti'


const statusbarheard = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({nome})
{
   return(
    <View style={style.container}>

     <MotiView 
      style={style.content}
      from={{ 
         translateY: -150,
          opacity: 0,}}
      animate={{
         translateY:0,
          opacity:1,}}
      transition={{
         type:'timing', 
         duration: 800, 
         delay: 300}}>
     
        <MotiText 
        style={style.username}
        from={{
         translateX: -250 }}
        animate={{
         translateX:0}}
        transition={{
         type:'timing',
         duration:800,
         delay:600,
        }}
        >
         {nome}
        </MotiText>
        <TouchableOpacity activeOpacity={0.9} style={style.buttonUser}>
          <Feather name="user" size={27} color="#FFF" />  
        </TouchableOpacity>
     </MotiView>
     
    </View>
   )    
}

const style = StyleSheet.create({
   container:{
      backgroundColor: '#9B7BB5',
      paddingTop: statusbarheard,
      flexDirection: 'row',
      paddingStart: 16,
      paddingEnd: 10,
      paddingBottom: 45, 
    },
  content:{
     flex: 1,
     alignItems: 'center',
     flexDirection: 'row',
     justifyContent: 'space-between',
    },
  username:{
     fontSize: 20   ,
     color:'#FFF',
     fontWeight: 'bold',
    },
})  