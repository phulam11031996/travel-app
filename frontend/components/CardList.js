import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";

const CardViewScreen = (props) => {
  const [places, setPlaces] = React.useState(props.places);

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: item.photo,
          }}
          onError={(error) => console.log(error)}
        />
        <Text style={styles.cardText}>{item.name} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        style={styles.container}
        data={props.places ? props.places : places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  cardText: {
    fontSize: 16,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CardViewScreen;
