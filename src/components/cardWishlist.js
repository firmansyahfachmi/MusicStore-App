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

import Icon from 'react-native-vector-icons/EvilIcons';

import harp from '../img/harp.png'

export default class CardWishlist extends Component {
    constructor(){
        super()
        this.state = {
            data : [
                {id: 1,name: 'aku'},
                {id: 2,name: 'itu'},
                {id: 3,name: 'liu'},
            ]
        }
    }

    render(){
        return(
            <Fragment>
                <View style={styles.cardhome}>
                    <FlatList
                        numColumns={2}
                        data={this.state.data}
                        renderItem={({ item }) => 
                        <View style={styles.carh1}>
                            <View style={{ width:'100%',height:110,borderTopLeftRadius: 5,borderTopRightRadius: 5,backgroundColor:'white',alignItems:'center'}}>
                                <Image source={harp} style={{width:80,flex:1}}/>
                            </View>
                            <Text style={{flex:1,paddingLeft:10,paddingTop:5,fontSize:17,fontWeight:'700'}}>{item.name}</Text>
                            <Text style={{flex:1,paddingLeft:10,fontWeight:'500'}}>99.000</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{alignItems:'flex-end', padding:10, marginTop:-40}}><Icon name="trash" size={35} color="red"/></TouchableOpacity>
                        </View>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    cardhome: {
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
        marginLeft: 5
    },
})