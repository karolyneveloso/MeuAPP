
import { StyleSheet, Text, TurboModuleRegistry, View, FlatList } from 'react-native';
import Header from '../../componentes/Header';
import Balance from '../../componentes/Balance';
import Moviments from '../../componentes/Moviments';
import Actions from '../../componentes/Actions';


const list =[ 
 {
  id:1,
  titulo:'fogos de 10',
  valor:'600,99',
  data:'20/11/2024',
  type: 0 //despesas
 },

 {
  id:2,
  titulo:'pix cliente gisela',
  valor:'999,99',
  data:'15/10/2024',
  type: 1 //entrada
 },

 {
  id:3,
  titulo:'pix cliente marcela',
  valor:'800,00',
  data:'20/10/2024',
  type: 1 //entrada
 }
]

export default function Home() {
  return(
    <View style={styles.container}>

      <Header nome="Gilberto Veloso" />
      <Balance saldo="9.000,00" gastos="500,00"/>
      <Actions/>
      <Text style={styles.title}>Últimas transações</Text>
      <FlatList 
      style={styles.list}
      data={list}
      heyExtractor={(item)=> string(item.id)}
      showsHorizontalScrollIndicator={true}
      renderItem={({item}) => <Moviments data={item} />}
      />
      
    </View>
  );  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    fontSize: 18,
    fontWeight: '600',
    margin: 14,
  },
  list:{
    marginStart:22,
    marginEnd:22,
  }
}); 



