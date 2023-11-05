import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Hook para enviar parametros a atraves de la navegación

function TodaysImage({ date, title, url, explanation }) {
  const { navigate } = useNavigation(); // Llamamos al hook de navigation

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation }); // Recibe el nombre de la pantalla definida en el rooteador y llama al compomente con los argumentos dados
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image}></Image>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={handleViewPress}
        >
          <Text style={styles.TouchableOpacityText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C449D",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    color: "white",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontSize: 16,
  },
  TouchableOpacity: {
    alignItems: "flex-end",
  },
  TouchableOpacityText: {
    color: "white",
  },
});

export default TodaysImage;
