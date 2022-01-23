import * as React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity ,TextInput} from 'react-native';
import History from './History'
import {useState} from 'react';

export default function Start({ navigation }){
  
  const [price, setPrice] = useState(-1);
  const [discount, setDiscount] = useState(-1);
  const [arrc, setArrc] = useState([])
  const [key, setKey] = useState(0);
  return (
    <View style={styles.container}>
    <Text style={{marginBottom:10}}>Enter Price:       </Text>
      <TextInput
        style={{ borderBottomWidth:2,borderBottomColor:'black', width: 300, marginBottom: 20 }}placeholder='Enter Price'  placeholderTextColor="#000" 

        onChangeText={(value) => {
          setPrice(value);
        }}>
        {}
      </TextInput>
      <Text style={{marginBottom:10}}>Enter Discount: </Text>
      <TextInput
        style={{ borderBottomWidth:2,borderBottomColor:'black', width: 300, marginBottom: 20  }}placeholder='Enter Discount Percentage'  placeholderTextColor="#000"
        onChangeText={(value) => {
          setDiscount(value);
        }}>
        {}
      </TextInput>
  
      {price!=-1 && discount!=-1? <Text>You Save:{price * (discount / 100)}</Text> : <Text>You Save :  </Text> }
      {price!=-1 && discount!=-1? <Text>Final Price:{price - price * (discount / 100)}</Text> : <Text>Final Price :</Text> }

 <View style={{flexDirection:'row'}}>
     {price != -1 && discount != -1 ? <TouchableOpacity style={[styles.button,]} onPress={()=>{setArrc([...arrc,{'key':key,"save":price,"discount":discount ,  "newPrice":price - price * (discount / 100)}]) 
     setKey(key+1) }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Save
        </Text>
  </TouchableOpacity> :<Text></Text>}
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('History', { arrc })}>
      <Text style={{color:'white', fontWeight: 'bold'}}>History</Text>
    </TouchableOpacity>
    </View>
    </View>

  );

}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:  '#6342AE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {
    margin:10,
    textAlign: 'center',
    alignItems: 'center',
    padding : 15,
    width:100,
    backgroundColor:'blue',
    borderRadius: 50,
  }
});
