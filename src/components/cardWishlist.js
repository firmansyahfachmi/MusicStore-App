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
import { deleteWishlist } from '../Publics/Redux/Action/wishlist';
import {connect} from 'react-redux'

import AsyncStorage from '@react-native-community/async-storage';

class CardWishlist extends Component {
    constructor(){
        super()
        this.state = {
            iduser: '',
            token: '',
            user: ''
        }
    }

    componentDidMount = async () => {
        await AsyncStorage.getItem('userId').then(res =>{
            this.setState({
                iduser:Number(res)
            })
        })

        await AsyncStorage.getItem('token').then(res => {
            this.setState({
            
                token:res
                
            })
        })
        await AsyncStorage.getItem('userId').then(res => {
            this.setState({
                
                user:Number(res)
             
            })
        })

        
    }

    render(){
        let header = {
            token: this.state.token,
            user: this.state.user,
        }
        return(
            <Fragment>
                <View style={styles.cardhome}>
                    <FlatList
                        numColumns={2}
                        data={this.props.data}
                        renderItem={({ item }) =>

                        <TouchableOpacity activeOpacity={0.8} style={styles.carh1} onPress={() => this.props.navigation.navigate('Detail', {name:item.name})}>

                            <View style={styles.img}>
                                <Image source={{uri: item.url}} style={{width:80,flex:1,resizeMode:'contain'}}/>
                            </View>

                            <Text style={styles.name}>
                            {
                                (item.name.length > 27) ?
                                item.name.substr(item.name,27)+'...'
                                :
                                item.name
                            }
                            </Text>

                            <Text style={{flex:1,paddingLeft:10,fontWeight:'700',color:'orange'}}>
                                Rp. {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>

                            <TouchableOpacity activeOpacity={0.5} style={{alignItems:'flex-end', padding:10, marginTop:-10}} onPress = {() => this.props.dispatch(deleteWishlist(this.state.iduser,item.id,header))}>
                                <Icon name="trash" size={35} color="red"/>
                            </TouchableOpacity>

                        </TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        flex:1,
        paddingLeft:10,
        paddingTop:5,
        fontSize:14,
        fontWeight:'700'
    },

    img : {
        width:'100%',
        height:110,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor:'white',
        alignItems:'center',
    },
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

export default connect () (withNavigation(CardWishlist))