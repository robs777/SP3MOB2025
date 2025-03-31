import { StyleSheet, Text, View } from "react-native";

export default function TopoOdonto() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTexto}>ODONTOPREV</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0066cc",
    paddingVertical: 20,
  },

  headerTexto: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
