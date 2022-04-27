import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


 const RestaurantItem = ({ restaurant  }) => {
  return (
    <View style={styles.restaurantContainer}>
     <Image  source={{
      uri:  restaurant.image
      
     }}
     style={styles.image}
     />
     <View style={styles.rowView}>
       <View>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min</Text>
       </View>
       <View style={styles.rate}>
         <Text>{restaurant.rating}</Text>
       </View>
     </View>  
       
     
    </View>
  )
}

export default RestaurantItem;

const styles = StyleSheet.create({
    
    restaurantContainer: {
      width: '100%',
      marginVertical: 10,
    },
    image : {
      width: '100%', // relative to screen width
      aspectRatio: 5 / 3,
      marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
    },
  
    subtitle: {
      color: "grey"
    },

    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    rate: {
        backgroundColor: 'grey',
        width: 30,
        height: 30,
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }

    
   
  });
