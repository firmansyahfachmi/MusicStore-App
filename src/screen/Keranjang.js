import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';

import {Icon} from 'native-base';
import { withNavigation } from 'react-navigation';

import {connect} from 'react-redux'
import {getCart, deleteCart, editCart} from '../Publics/Redux/Action/cart'

import AsyncStorage from '@react-native-community/async-storage';

class Keranjang extends Component {
    constructor(){
        super()
        this.state = {
            iduser: '',
            token: '',
            user: '',
            header: ''
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

        let header = {
            token: this.state.token,
            user: this.state.user,
        }
        this.setState({header:header})
        await this.props.dispatch(getCart(this.props.navigation.getParam('id'),this.state.header))
    }


    total = () => {
        let count = 0;
        this.props.cart.map(cart => (count += cart.quantity * cart.price));
        return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
/////////////
    editQuantity = async (id, data ,quantity) => {
        let newData = { ...data, quantity: quantity };
        if(quantity > 0){
            console.log('o', newData)
            await this.props.dispatch(editCart(newData, this.state.header));
        } else {
            await this.props.dispatch(deleteCart(this.state.iduser, id,  this.state.header));
           
        }
    }
//////////////
    render(){

        return(
            <Fragment>
                
                {(this.props.cart.length > 0)?
                <>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    {this.props.cart.map(cart => (
                    <View style={styles.div} key={cart.id}>
                        <View style={styles.img}>
                            <View style={styles.imgProfile}>
                                <Image source={{uri: cart.url}} style={{flex:1, resizeMode:'contain'}}/>
                            </View>
                        </View>

                        <View style={styles.profile}>

                            <Text style={{fontSize:16,fontWeight:'700',color:'grey'}}>{
                                (cart.name.length > 27) ?
                                cart.name.substr(cart.name,27)+'...'
                                :
                                cart.name
                            }</Text>

                            <Text style={{fontSize:13, fontWeight:'700',color:'grey'}}>Rp. {cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>

                            <View style={{flex:1,alignItems:'center',paddingVertical:15, flexDirection:'row'}}>
                                <TouchableOpacity style={{marginRight:30}} onPress = {() => this.props.dispatch(deleteCart(this.state.iduser,cart.id,this.state.header))}>
                                    <Icon type="EvilIcons" name="trash" size={35} style={{color:'red'}}/>
                                </TouchableOpacity>

                                <TouchableOpacity onPress ={() => this.editQuantity( cart.id, cart, cart.quantity-=1)}>
                                    <Icon type="EvilIcons" name="minus" size={35}/>
                                </TouchableOpacity>

                                <View style={{marginHorizontal:15}}>
                                    <Text style={{fontSize:16}}>{cart.quantity}</Text>
                                </View>

                                <TouchableOpacity onPress ={() => this.editQuantity( cart.id, cart,cart.quantity+=1)}>
                                    <Icon type="EvilIcons" name="plus" size={35}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                       
                    </View>
                    ))}
            
                </ScrollView>
                

                <View style={styles.footer}>
                        <View style={{flex:1,paddingHorizontal:5}}>
                            <Text>Total Harga</Text>
                            <Text style={{fontWeight:'700'}}>Rp. {this.total()}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={styles.butCart} onPress= {() => this.props.navigation.navigate('Home')}>
                            <Text style={{color: 'white', fontSize:15,fontWeight:'700'}}>Beli</Text>
                        </TouchableOpacity>
                    </View>
                </>
                :
                <View style={{width:'100%', height:550,justifyContent:'center',alignItems:'center'}}>
                    <Icon type="EvilIcons" name="exclamation" style={{fontSize:50,color:'grey'}}/>
                    <Text style={{fontSize:16,color:'grey'}}>Keranjang kamu Kosong!</Text>
                </View>
                }
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    butCart : {
        flex:1,
        alignItems:'center',
        backgroundColor:'#fabc0c',
        padding:10,
        borderRadius:5
    },
    header: {
        backgroundColor: '#F5D372',
        width: '100%',
        height: 60,
        elevation: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems:'center'
    },

    footer :{
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center',
        padding: 10,
        elevation: 20,
    },

    div : {
        width: '100%',
        height:'auto',
        elevation: 5,
        paddingHorizontal: 10,
        justifyContent:'center',
        flexDirection: 'row',
        
    },

    profile : {
        flex: 1,
        justifyContent:'flex-start',
        paddingTop: 30,
    },

    img : {
        width: '30%',
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:15,
    },

    imgProfile: {
        backgroundColor: 'whitesmoke',
        width: 100,
        height:100,
        padding: 5,
        borderRadius: 5,
    },

})

const mapStateToProps = state => {
    return{
        cart: state.cart.cartData
    }
}
export default connect (mapStateToProps) (withNavigation(Keranjang))