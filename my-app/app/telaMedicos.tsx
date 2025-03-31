import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import TopoOdonto from "../components/topoOdonto";
export default function TelaMedicos() {
  const profissionais = [
    {
      id: 1,
      name: "Dr. Robson",
      clinic: "Clínica A",
      image: require("../assets/medh.png"),
    },
    {
      id: 2,
      name: "Dra. Robsa",
      clinic: "Clínica B",
      image: require("../assets/medm.png"),
    },
    {
      id: 3,
      name: "Dr. Rob",
      clinic: "Clínica C",
      image: require("../assets/medh2.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <TopoOdonto></TopoOdonto>

      <View style={styles.content}>
        <Text style={styles.textoPrincipal}>Profissionais disponíveis</Text>

        {profissionais.map((profissional) => (
          <View key={profissional.id} style={styles.profissionalCard}>
            <View style={styles.cardContent}>
              <Image
                source={profissional.image}
                style={styles.profissionalImagem}
              />

              <View style={styles.profissionalInfo}>
                <Text style={styles.profissionalName}>{profissional.name}</Text>
                <Text style={styles.textoClinica}>{profissional.clinic}</Text>
              </View>
            </View>

            <Pressable style={styles.botaoMarcar}>
              <Text style={styles.botaoTexto}>MARCAR</Text>
            </Pressable>
          </View>
        ))}
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

  profissionalCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },

  cardContent: {
    flexDirection: "row",
    marginBottom: 15,
  },

  profissionalImagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },

  profissionalInfo: {
    flex: 1,
    justifyContent: "center",
  },

  profissionalName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  textoClinica: {
    fontSize: 14,
    color: "#666",
  },

  botaoMarcar: {
    backgroundColor: "#0066cc",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
