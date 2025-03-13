
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text,  View, Image } from 'react-native';


export default function TelaHome() {

    
  return (
    
   
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.pacienteInfo}>
          <Image 
            source={require('../assets/imgrobin.png')} 
            style={styles.pacienteImagem}
          />
          <View style={styles.patientDetails}>
            <Text style={styles.pacienteNome}>Robson Santos</Text>
            <Text style={styles.pacientePlano}>Plano: B</Text>
          </View>
        </View>
      </View>


      <View style={styles.content}>

        <View 
          style={styles.card}>
        <Link href="/telaMedicos">
          <Image 
            source={require('../assets/agendarconsulta.png')} 
            style={styles.cardImage}
          />
          </Link>
          <Link href="/telaMedicos" style={styles.cardTexto}>Agendar Consulta</Link>
        </View>

        <View 
          style={styles.card}
         
        ><Link href="/telaSintomas">
          <Image 
            source={require('../assets/prediag.png')} 
            style={styles.cardImage}
          />
          </Link>
          <Link href="/telaSintomas" style={styles.cardTexto}>Pré-Diagnóstico</Link>
        </View>
      </View>

     
      <View style={styles.footer}>
        <Text style={styles.footerTexto}>ODONTOPREV</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
  
  header: {
    backgroundColor: '#0066cc',
    padding: 20,
    
  },
  
  pacienteInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  pacienteImagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  
  patientDetails: {
    flex: 1,
    marginLeft: 100
  },
  
  pacienteNome: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  pacientePlano: {
    color: 'white',
    fontSize: 16,
  },
  
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  
  },
  
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  
  cardTexto: {
    fontSize: 16,
    color: '#333',
  },
  
  footer: {
    backgroundColor: '#0066cc',
    paddingVertical: 25,
  },
  
  footerTexto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});