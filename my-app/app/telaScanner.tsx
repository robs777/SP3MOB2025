import { StyleSheet, Text, View, Image } from "react-native";
import TopoOdonto from "../components/topoOdonto";
import { Link } from "expo-router";

export default function TelaScanner() {
  return (
    <View style={styles.container}>
      <TopoOdonto></TopoOdonto>

      <View style={styles.content}>
        <Text style={styles.textoPrincipal}>Faça o Scanner</Text>

        <View style={styles.scannerCard}>
          <Image
            source={require("../assets/camera2.png")}
            style={styles.scannerImage}
          />
          <Text style={styles.textoScanner}>Abir Camera</Text>
        </View>

        <Link href="/telaMedicos" style={styles.botaoAgendamento}>
          <Text style={styles.textoBotaoAgendamento}>Agendamento</Text>
        </Link>
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
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  textoPrincipal: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },

  scannerCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },

  scannerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 15,
  },

  textoScanner: {
    fontSize: 16,
    color: "#333",
  },

  botaoAgendamento: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 5,
    marginTop: 30,
    width: "100%",
  },

  textoBotaoAgendamento: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
