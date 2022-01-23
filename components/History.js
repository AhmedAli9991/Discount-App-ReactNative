import * as React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity,FlatList } from 'react-native';

export default function History({ navigation, route}) {
console.log(route)
  const [arrc, setArrc]  = React.useState(route.params.arrc)
  return (
    <View style={styles.container}>

        <View style={{flexDirection:'row'}}>  
        <Text style={styles.text}>No</Text>
        <Text style={styles.text}>Save</Text>
        <Text style={styles.text}>Discoont</Text>
        <Text style={styles.text}>NewPrice</Text>
        <Text style={[styles.text,{color:'red'}]
          }>
Delete</Text>
        </View>


    <FlatList
        data={arrc}
        renderItem={({item,index}) => (
        <View style={styles.list}>  
        <Text style={styles.text}>{index+1})</Text>
        <Text style={styles.text}>{item.save}</Text>
        <Text style={styles.text}>{item.discount}</Text>
        <Text style={styles.text}>{item.newPrice}</Text>
        <TouchableOpacity onPress={()=>{
          setArrc(arrc.filter (x=>x!= item))
          }}><Text style={[styles.text,{color:'red'}]
          }
          >Remove</Text></TouchableOpacity>
        </View>
        )}/>
      
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    margin:10,
    textAlign: 'center',
    padding : 15,
    backgroundColor:'blue',
    
  },
  container: {
    flex: 1,
    backgroundColor:  '#6342AE',
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  list: {
    flexDirection: 'row',
    flex:1,
    backgroundColor:  'pink',
    marginTop:20,
    padding: 15,
  },
    text: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  }
});