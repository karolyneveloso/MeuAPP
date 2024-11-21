
import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {MotiView, MotiText, AnimatePresence } from 'moti'

export default function Moviments({data}){
 const[showValor, setShowValor] = useState(false)
 return (
   <TouchableOpacity style={style.container} onPress={() => setShowValor(!showValor)}    >
     <Text style={style.data}>{data.data}</Text>
     <View style={style.content}>
       <Text style={style.titulo}>{data.titulo}</Text> 

       {showValor ? (
       <AnimatePresence exitBeforeEnter>
         <MotiText
         style={data.type===1 ? style.valor:style.despesas}
         from={{ translateX:100 }}
         animate={{translateX:0}}
         transition={{
            type:'timing',
            duration:500
         }}> 
         R${data.valor}
         </MotiText> 
       </AnimatePresence>
        ) : (
         <AnimatePresence exitBeforeEnter>
           <MotiView style={style.estilo}> </MotiView>
         </AnimatePresence>
        )}
     </View>
   </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 22,
        borderBottomWidth: 0.5,
        borderBottomColor: '#E6E6FA',  
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5 ,
        marginBottom: 5,
    },
    data:{
        color: '#E6E6FA',
        fontWeight: '400',
    },
    titulo:{
        fontSize: 15,
        fontWeight: '400',
    },
    valor:{
        fontSize: 15,
        color: '#006400',
        fontWeight: '400'
    },
    despesas:{
        fontSize: 15,
        color: '#FF4500',
        fontWeight: '400'
    },
    estilo:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:'#E6E6FA',
        borderRadius: 8,
    }
   
})
