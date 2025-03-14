
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import TopoOdonto from '../components/TopoOdonto';
import { Link } from 'expo-router';

export default function TelaLogin() {
  return (
   
    <View style={styles.container}>
    <TopoOdonto></TopoOdonto>

    
      <View style={styles.content}>
    
        <Text style={styles.textoBemVindo}>Bem-vindo!</Text>

     
        <TextInput
          style={styles.input}
          placeholder="Login"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />

      
      <Link href="/telaCadastro" style={styles.textoCadastrar}>Cadastrar conta</Link>
       

       
        <Pressable style={styles.botaoEntrar}>
            <Link href="/telaHome" style={styles.botaoTexto}>Entrar</Link>
         
        </Pressable>
      </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  

  
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  
  textoBemVindo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  
  textoCadastrar: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  botaoEntrar: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});