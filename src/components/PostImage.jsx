import { useNavigation } from "@react-navigation/native"; // Hook para enviar parametros a atraves de la navegación
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Componente para renderizar cada una de las imágenes den LastFiveDaysImages.jsx
function PostImage({ title, date, url, explanation }) {
  const { navigate } = useNavigation(); // Llamamos al hook de navigation

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation }); // Recibe el nombre de la pantalla definida en el rooteador y llama al compomente con los argumentos dados
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={handleViewPress}
      >
        <Text style={styles.TouchableOpacityText}>View</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(18,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: "white",
  },
  touchableOpacity: {
    alignItems: "flex-end",
  },
  TouchableOpacityText: {
    color: "white",
  },
});

export default PostImage;
