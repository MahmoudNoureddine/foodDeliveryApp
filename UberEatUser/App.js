import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';




export default function App() {
  return (
    <View style={styles.container}>
      {/* Restaurant Items */}
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailScreen /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
  },
 
});
