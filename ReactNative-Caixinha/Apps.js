import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import  {Image, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default function App() {

  const [sim, setSim] = useState(true);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
          
        
          <Image style={{marginTop:-40, borderColor: "#FFC0CB", borderWidth: 2, width: '200%', height:'34%', textTransform: 'uppercase'}}
            source={require('./assets/kuromi.png')} 
          /> 
      

        <View style={{margin: 10}}>
          <Text style={{fontSize: 20, marginBottom: 5, fontWeight: "bold"}}>Dados pessoais:</Text>
          <TextInput
            placeholder={'Digite seu nome'}
            value={nome}
            onChangeText={text => setNome(text)}
            style={styles.input}
          />

          <TextInput
            placeholder={'Digite seu endereço'}
            value={endereco}
            onChangeText={text => setEndereco(text)}
            style={styles.input}
          />

          <TextInput
            placeholder={'Digite seu telefone'}
            value={telefone}
            onChangeText={text => setTelefone(text)}
            style={styles.input}
          />

          <TextInput
            placeholder={'Digite seu email'}
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input4}
          />
        </View>

        <View style={{flexDirection: "row"}}>
        <Checkbox
          value={sim}
          onValueChange={() => setSim(!sim)}
          color={sim ? "#ff006e" : undefined}
          style={{alignSelf: "center", margin: 10, marginTop: -2}}
        />
        <Text style={{marginTop: -2}}> Aceito os termos exigidos.</Text>
      </View>

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>

    

      
    </View>


    <View style={styles.result}>

      <Text style={{fontSize: 23, marginBottom: 4, fontWeight: "bold", marginLeft:6}}>Dados cadastrados:</Text>

      <Text style={{fontSize:20, marginTop:10, marginLeft:6}}>Nome: {nome}</Text>
      <Text style={{fontSize:20, marginTop:10, marginLeft:6}}>Endereço: {endereco}</Text>
      <Text style={{fontSize:20, marginTop:10, marginLeft:6}}>Telefone: {telefone}</Text>
      <Text style={{fontSize:20, marginTop:10, marginLeft:6}}>Email: {email}</Text>
      <Text style={{fontSize:20, marginTop:10, marginLeft:6}}>Aceito: {sim ? "Sim💜​": "Não, aceita por favor🥺​"}</Text>
    </View>
  </KeyboardAvoidingView>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdb4db',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    backgroundColor: '#fff',
    width:'100%',
    marginBottom:15,
    color:'222',
    fontSize:17,
    borderRadius:5,
    padding:10
  },
  input4:{
    backgroundColor: '#fff',
    width:'100%',
    marginBottom:5,
    color:'222',
    fontSize:17,
    borderRadius:5,
    padding:10
  },

  btnSubmit:{
    backgroundColor:'#FFC0CB',
    width:'100%',
    height:35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10

  },
  submitText:{
    color:'#ff006e',
    fontSize:15,

  },
  btnRegister:{
    marginTop:10,
  },
  registerText:{
    color:'#ff006e'

  },
  result:{
    backgroundColor:'#FFC0CB',
    width:'95%',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 9
  }
});
