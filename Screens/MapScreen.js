import { useEffect, useState } from "react";
import getLocation from "../utils/getLocation";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    (async () => {
      const coords = await getLocation();
      setLocation({ ...coords });
    })();
  }, [location]);

  return (
    <MapView
      style={styles.container}
      region={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}
      mapType="standard"
      minZoomLevel={15}
    >
      <Marker
        title="I am here"
        coordinate={{
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
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
