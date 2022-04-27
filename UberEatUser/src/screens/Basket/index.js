import {View, Text, StyleSheet} from 'react-native';

import restaurants from '../../../assets/data/restaurants.json';
import { useState } from 'react';



const restaurant = restaurants[0];

const Basket = () => {
    const [quantity, setQuantity] = useState(1);

    const BasketDishesItem = () => {
        return (
            <View style={styles.row}>
             <View style={styles.quantityContainer}>
                <Text>1</Text>
             </View>
             <Text style={{fontWeight:"600"}}>Name</Text>
             <Text style={{marginLeft: "auto"}}>$12</Text>
            </View>
        )
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text>Your items</Text>
            
            
            <View style={styles.separator} />
            
           

            <View style={styles.button}>
               <Text style={styles.buttonText}>Create order</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
     page: {
        flex: 1,
        width: "100%", 
        paddingVertical: 30, // temp fix
        padding: 10,
     },
     name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10, 
     },

    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
     
      marginTop: 50,
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    
    button: {
        backgroundColor: "black",
        marginTop: "auto", 
        padding: 20,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 20,
    },

    quantityContainer: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    }

})

export default Basket

