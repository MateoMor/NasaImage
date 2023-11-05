import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native"; // Hook para tomar los parametrso enviados por ruta
import Header from "../components/Header";

function Detail() {
  const {
    params: { title, url, explanation, date },
  } = useRoute(); //con esto pedimos los parametros enviados por ruta

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content: {
    backgroundColor: "#2C449D",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1, // Este flex es importante para que el contenido no se estire en vertical sino que ocupe solo la pantalla
  },
  image: {
    width: "100%",
    height: "50%",
    borderColor: "white",
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: { color: "white", fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  date: { color: "white", fontSize: 16 },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: "white",
    fontSize: 16,
  },
});

export default Detail;
