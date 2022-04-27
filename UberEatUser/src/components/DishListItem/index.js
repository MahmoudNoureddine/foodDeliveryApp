import{ View, Text, StyleSheet, Image } from 'react-native';

const DishListItems = ({dish}) => {
    return (
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.price}>$ {dish.price}</Text>
          </View>   
          { dish.image && (
              <Image  source={{uri: dish.image}} style={styles.image}/>)}
         </View>
    )
}

const styles = StyleSheet.create({
  container: {
      paddingVertical:10,
      marginHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: "lightgrey",
      flexDirection: "row",
      
  },
  name: {
      fontWeight: "600",
      fontSize: 16,
      letterSpacing: 0.5,
  },
  description: {
      color: "grey",
      marginVertical: 10,
  },
  price: {
      fontSize: 16,
  },
  image : {
      width: 75,
      aspectRatio: 1
  }
})

export default DishListItems