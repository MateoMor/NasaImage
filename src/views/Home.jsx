import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { format, sub } from "date-fns"; // Método para formatear la fecha y para substraer una cantidad de tiempo respectivamente. Más información en date-fns.org

import Header from "../components/Header";
import TodaysImage from "../components/TodaysImage";
import fetchData from "../utils/fetchData";
import LastFiveDaysImages from "../components/LastFiveDaysImages";

function Home() {
  const [todaysImage, setTodaysImage] = useState(); // Almacenamos la imagen de hoy
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState([]); // Arreglo que almacenará la información de las imágenes de los últimos 5 días

  useEffect(() => {
    // Función asincrona para pedir la imágen del día
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchData();
        setTodaysImage(todaysImageResponse); // Guardamos los datos del fetch en un estado
      } catch (error) {
        console.error(error);
        setTodaysImage(undefined); // Si no hay imagen definida no se muestra nada en la pantalla
      }
    };

    // Función para pedir las imágenes de los últimos 5 días
    const loadLast5DaysImages = async () => {
      try {
        const date = new Date(); // date crea una instancia de la clase Date llamada date, con esto obtenemos la fecha del día de hoy
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd"); // A la fecha del día de  hoy le substraemos 5 días y la formateamos

        const lastFiveDaysImageResponse = await fetchData(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );

        lastFiveDaysImageResponse.reverse() // ponemos el arreglo al reves

        setLastFiveDaysImages(lastFiveDaysImageResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage
        {
          ...todaysImage /* Con el spread operator se mandan todas las propiedades de todaysImage, esto no se un argumento pues no tiene identificador */
        }
      />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default Home;
