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
import Icon from 'react-native-vector-icons/EvilIcons';


const Carditem =(props) => {

    return(
        <Fragment>
            <View style={styles.carditem}>
                <FlatList
                    numColumns={2}
                    data={props.data}
                    renderItem={({ item }) => 
                    <TouchableOpacity activeOpacity={0.8} style={styles.carh1} onPress={() => props.navigation.navigate('Detail' ,{name:item.name})}>

                        <View style={styles.imgDiv}>
                            <View style={styles.statusDiv}>
                                {(item.quantity > 0) ?
                                <Text style={{backgroundColor:'green',paddingHorizontal:5, borderRadius:5 ,width:67, color:'white', fontWeight:'700'}}>Available</Text>
                                :
                                <Text style={{backgroundColor:'red',paddingHorizontal:5, borderRadius:5 ,width:83, color:'white', fontWeight:'700'}}>Unavailable</Text>
                                }
                            </View>
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
                        <Text style={{flex:1,paddingLeft:10,fontWeight:'700', color:'orange'}}>Rp. {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                        <Text style={{flex:1,paddingLeft:10,paddingBottom:10,color:'grey'}}>
                            <Icon name="location" size={14}/> {item.branch_name}
                        </Text>

                    </TouchableOpacity>}
                    keyExtractor={item => item.id}
                />
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    statusDiv : {
        width:'100%',
        padding:5,
        justifyContent:'flex-start',
    },

    imgDiv : {
        width:'100%',
        height:150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor:'white',
        alignItems:'center'
    },

    carditem: {
        width: '100%',
        height: 'auto',
        flexDirection:'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        paddingTop:10,
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