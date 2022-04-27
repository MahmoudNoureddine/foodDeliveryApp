import {view, Text, Image, FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import DishListItems from '../../components/DishListItem';
const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
    return (
      <View style={styles.page}>
          <Image source={{uri: restaurant.image}} style={styles.image} />
           
             <Ionicons 
              name="arrow-back-circle"
              size={45}
              color="white"
              style={styles.iconContainer}
             />
           
          <View style={styles.container}> 
           <Text style={styles.title}>{restaurant.name}</Text>
           <Text style={styles.subtitle}>
             $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
               {restaurant.maxDeliveryTime} min
           </Text>
          </View>
          {/* <DishListItems  dish={restaurant.dishes[0]}/>
          <DishListItems  dish={restaurant.dishes[1]}/>
          <DishListItems  dish={restaurant.dishes[2]}/> */}
          <FlatList 
           data={restaurant.dishes}
           renderItem={({item}) => (
            <DishListItems  dish={item}/>
           )}
          />

      </View>
    )
}

const styles = StyleSheet.create({
  page: {
   flex: 1, // taking whole space of the screen
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3, // instead of height i used aspectRatio
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },

  subtitle: {
    color: "grey",
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
     
     position: "absolute",
     top: 40,
     left: 10,
     
  }
})

export default RestaurantDetailScreen