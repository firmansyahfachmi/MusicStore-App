import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';


const Carditem =(props) => {

    return(
        <Fragment>
            <View style={styles.carditem}>
                <FlatList
                    numColumns={2}
                    data={props.data}
                    renderItem={({ item }) => 
                    <TouchableOpacity activeOpacity={0.8} style={styles.carh1} onPress={() => props.navigation.navigate('Detail' ,{name:item.name})}>
                        <View style={{ width:'100%',height:110,borderTopLeftRadius: 5,borderTopRightRadius: 5,backgroundColor:'white',alignItems:'center'}}>
                            <Image source={{uri: item.url}} style={{width:100,resizeMode:'contain',flex:1}}/>
                        </View>
                        <Text style={{flex:1,paddingLeft:10,paddingTop:10,fontSize:14,fontWeight:'700',overflow:'hidden'}}>
                            {
                                (item.name.length > 27) ?
                                item.name.substr(item.name,27)+'...'
                                :
                                item.name
                            }
                            </Text>
                        <Text style={{flex:1,paddingLeft:10,fontWeight:'500',paddingBottom:10}}>Rp. {item.price}</Text>

                    </TouchableOpacity>}
                    keyExtractor={item => item.id}
                />
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    carditem: {
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        paddingTop:10
    },

    carh1: {
        backgroundColor: 'whitesmoke',
        width: '47%',
        height: 'auto',
        borderRadius: 5,
        marginRight:5,
        marginBottom:10,
        elevation: 2,
        marginLeft: 5,
    },
})

export default withNavigation(Carditem)