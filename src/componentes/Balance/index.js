import React, { useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {MotiView, MotiText } from 'moti'

export default function Balance({saldo,gastos}){
 const[showValor, setShowValor] = useState(false)
 return ( 
   <MotiView
    style = {style.container}
    from={{
      rotateX: '-100deg',
      opacity: 0,
    }}
    animate={{
      rotateX: '-0',
      opacity: 1,
    }}
    transition={{
      type:'timing',
      delay:500,
      duration:900,
    }}> 

     <View style= {style.visual}>
       <Text style= {style.Titulo}> Saldo </Text> 
       <View style= {style.conteudo}>
        <Text style= {style.currencySymbol}>R$</Text>
        <MotiText 
        style= {style.valor}
        from={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'timing',
          duration: 500,
        }}>
          {saldo}
        </MotiText>
       </View>
     </View>

     <View style= {style.visual}>
       <Text style= {style.Titulo}> Gastos </Text> 
       <View style= {style.conteudo}>
        <Text style= {style.currencySymbol}>-R$</Text>
        <MotiText 
        style= {style.valorgasto}
        from={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'timing',
          duration: 500,
        }}>
          {gastos}
        </MotiText>
       </View>
     </View>

   </MotiView>

    
  );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        flexDirection: 'row',   
        justifyContent: 'space-between',
        paddingStart: 15,
        paddingEnd: 15,
        marginTop: -18,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 15,
        paddingBottom: 15,
        zIndex: 99,
    },
    Titulo:{
        fontSize: 18,
        color: '#D8BFD8', 
    },
    conteudo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color:'#D8BFD8',
        marginRight: 3,
    },
    valor:{
        fontSize: 15,
        color: '#006400',
    },
    valorgasto:{
         fontSize: 15,
         color: '#FF4500'

    }
})
