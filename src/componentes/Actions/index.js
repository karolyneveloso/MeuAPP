import { View, StyleSheet, Text, TouchableOpacity,ScrollView } from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons';

export default function Actions() {
 return (
   <ScrollView style={style.container} horizontal={true} showsHorizontalScrollIndicator={false}>

      <TouchableOpacity style={style.botton}> 
        <View style={style.direction}>
          <AntDesign name="pluscircleo" size={26} color=""/>
          <Text style={style.namebotton}>Adicionar</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={style.botton}> 
        <View style={style.direction}>
          <AntDesign name="tagso" size={26} color=""/>
          <Text style={style.namebotton}>Compras</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={style.botton}> 
        <View style={style.direction}>
          <AntDesign name="creditcard" size={26} color=""/>
          <Text style={style.namebotton}>Carteira</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={style.botton}> 
        <View style={style.direction}>
          <AntDesign name="barcode" size={26} color=""/>
          <Text style={style.namebotton}>Boletos</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={style.botton}> 
        <View style={style.direction}>
          <AntDesign name="setting" size={26} color=""/>
          <Text style={style.namebotton}>Conta</Text>
        </View> 
      </TouchableOpacity>

   </ScrollView>
  );
}

const style = StyleSheet.create({
    container:{
      maxHeight:84,
      marginBottom:15,
      marginTop:18,
      paddingStart:15,
      paddingEnd:15,

    },
    direction:{
      alignItems:'center',
      width:85,
    },
    namebotton:{
      fontSize: 15,
      marginTop:4,
      textAlign:'center',
      fontWeight:'600',
    }
   
  

})