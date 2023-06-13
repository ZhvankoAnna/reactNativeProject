import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({route}) {
  const {latitude, longitude} = route.params;

  return (
    <MapView
      style={styles.container}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}
      mapType="standard"
      minZoomLevel={15}
    >
      <Marker
        title="I am here"
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
        description="Hello"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
