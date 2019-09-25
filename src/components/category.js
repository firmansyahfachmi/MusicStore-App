import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

const Category = (props) => {
    return(
        <Fragment>
            <View style = {styles.category}>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                   
                    {props.data.map(category =>(
                        
                    <TouchableOpacity activeOpacity={0.8} key={category.id} style={styles.cat1} onPress={() => props.navigation.navigate('item', {category:category.category_name})}>
                        <View style={{flex:1}}>
                            <Image source={{uri : category.url}} style={styles.image}/>
                            
                        </View>
                        <Text style={styles.catOver}>{category.category_name.toUpperCase()}</Text>
                    </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    category: {
        width: '100%',
        height: 'auto',
        paddingLeft: 9
    },

    catOver: {
        position:'absolute',
        alignItems:'center',
        fontSize:18,
        fontWeight:'bold',
        letterSpacing: 4,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5
    },

    image: {
        flex:1,
        width:100,
        height:100,
        resizeMode:'contain'
        
    },

    cat1: {
        backgroundColor: '#F5D372',
        width: 130,
        height: 'auto',
        borderRadius: 5,
        marginRight: 5,
        alignItems:'center',
        justifyContent:'center',
        elevation: 3,
        marginBottom: 5,
        marginLeft: 5
    },

})

export default withNavigation(Category)