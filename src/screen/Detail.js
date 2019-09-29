import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import {Spinner} from 'native-base'

import {connect} from 'react-redux'
import {getProductsDetail} from '../Publics/Redux/Action/products'
import { withNavigation } from 'react-navigation';

import {addWishlist, getWishlist, deleteWishlist} from '../Publics/Redux/Action/wishlist'

import {addCart, editCart} from '../Publics/Redux/Action/cart'

import Icon from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-community/async-storage';


class Detail extends Component {
    constructor(){
        super()
        this.state = {
            iduser: '',
            token: '',
            user: '',
            isWishlisted: false,
            search: '',
            dataDetail: []
        }
    }

    componentDidMount = async () => {
        await this.setState({dataDetail:[]})
        await this.props.dispatch(getProductsDetail(this.props.navigation.getParam('name')))
        .then(res =>{
            this.setState({dataDetail: this.props.detail})
        })

        let res = {...this.props.detail[0]}
        let id = res.id


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

        await this.props.dispatch(getWishlist(this.state.iduser,header));
        
        this.props.wishlist.map(item => {
            if(item.id == id && item.id_user == this.state.iduser){ 
                this.setState({
                    isWishlisted:true
                })
            }
            return null;
        })


    }

    componentWillUnmount() {
        this.setState({  
            iduser: '',
            token: '',
            user: '',
            isWishlisted: false,
            search: '',
            dataDetail: []
        })
      }

    addWishlist = (data, command) =>{
        let header = {
            token: this.state.token,
            user: this.state.user,
        }

        if(command == 'add'){ 
            this.props.dispatch(addWishlist(data, this.state.iduser, header))
            this.setState({
                isWishlisted:true
            });
        }else if(command == 'remove') {
            this.props.dispatch(deleteWishlist(this.state.iduser,this.state.idItem,header));
            this.setState({
                isWishlisted:false
            });
        }
        
    }

    

    handleChange = async (value) => {
        await this.setState({search: value});
     };
 
    redirect = () =>{
        this.props.navigation.navigate('item', {name:this.state.search})
    }

    addCart = async (data) => {
        let header = {
            token: this.state.token,
            user: this.state.user,
        }
        let find = false;

        this.props.cart.map(cart => {
            if (cart.id_product === data.id) {
                find = true;
            }
            return null;
        });

        let findqty = this.props.cart.filter(cart => cart.id_product === data.id);
        let qty = { ...findqty[0] };

        await this.setState({ quantity: this.state.quantity + qty.quantity || 1 });
        if (find === true) {
            let newData = { ...data, quantity: this.state.quantity };
            this.props.dispatch(editCart(newData,header)).then(res => {
                this.props.navigation.navigate('Keranjang', {id:this.state.iduser})
            })
        } else {
            this.props.dispatch(addCart(data,header)).then(res => {
                this.props.navigation.navigate('Keranjang', {id:this.state.iduser})
            })
        }
        

    }

    render(){
        console.log('s', this.state.iduser)
        let data = {...this.props.detail[0]}
        return(
            <Fragment>
                <View style = {styles.header} >
                    
                    <TouchableOpacity style={{width:"15%",alignItems:'center'}} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrowleft" size={28} color="#fff"/>
                    </TouchableOpacity>
                    
                    <TextInput
                        style={{
                        borderRadius: 5,
                        padding: 10,
                        backgroundColor: 'white',
                        width:"65%"
                        }}
                        placeholder="Search.."
                        onChangeText={(text)=>this.handleChange(text)}
                        onSubmitEditing={() => this.redirect()}
                    />
                    <TouchableOpacity style={{width:"20%",alignItems:'center'}}>
                        <Icon name="shoppingcart" size={28} color="#fff" onPress={() => this.props.navigation.navigate('Keranjang',{id:this.state.iduser})}/>
                    </TouchableOpacity>
              
                </View>
                
                {(this.props.loading)?
                <View style={{flex:1,justifyContent:'center',alignItems:'center',height:550}}>
                    <Spinner color='#F5D372' />
                </View>
                :
                <>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {this.props.detail.map(detail => (
                        <View key={detail.id}>
                            <View style={styles.image}>
                                <Image source={{uri : detail.url}} style={{flex:1,resizeMode:'contain',width:'100%'}}/>
                            </View>

                            <View style={styles.title}>
                            {(this.state.iduser !== 0)?
                                
                                (this.state.isWishlisted === true)? 
                                    <TouchableOpacity style={styles.divWish} onPress={() => this.addWishlist(detail, 'remove')}>
                                    
                                        <Icon name="heart" size={30} color="red" style={styles.heart}/>
                                                                    
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.divWish} onPress={() => this.addWishlist(detail, 'add')}>
                                    
                                        <Icon name="heart" size={30} color="grey" style={styles.heart}/>
                                                                    
                                    </TouchableOpacity>
                                    :
                                    null
                                    
                                
                            }
                                <View style={{flex:1,justifyContent: 'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold'}}>{detail.name}</Text>
                                </View>
                            
                                <View style={{flex:1,justifyContent: 'center'}}><Text style={{fontWeight:'700',color:'#fabc0c',fontSize:17}}>Rp. {detail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text></View>
                            </View>

                            <View style={styles.desc}>
                                <View>
                                    <Text style={styles.sub}>Informasi Produk</Text>
                                </View>
                                <View style={{paddingTop:15,flex:1}}>
                                    <Text style={{fontSize:15,color:'grey'}}>Stok : {detail.quantity}</Text>
                                </View>
                                <View style={{paddingVertical:15}}>
                                    <Text style={{fontSize:15,color:'grey'}}>Cabang : {detail.branch_name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.sub}>Deskripsi Produk</Text>
                                </View>
                                <View style={{paddingTop:5}}>
                                    <Text style={{fontSize:14,color:'grey'}}>
                                    {detail.description}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        ))}
                    </ScrollView>
                    

                    {(this.state.iduser !== 0)?
                    <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.5} style={{flex:1,alignItems:'center'}}>
                            <Text style={{color: '#fabc0c',fontWeight:'bold', fontSize:17}}>Beli</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.buttonCart} onPress={() => this.addCart(data)}>
                            <Text style={{color: 'white',fontWeight:'700', fontSize:15}}>Tambah Ke Keranjang</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
                    }
                </>
                }
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    divWish:{
        alignItems:"flex-end",
        marginTop:-45,
        marginBottom:40,
        marginRight:5
    },

    heart: {
        backgroundColor:'white',
        padding:12,
        borderRadius:35,
         elevation:5
    },

    sub : {
        fontSize:17,
        fontWeight:'700',
        color:'grey'
    },

    buttonCart :{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fabc0c',
        padding:10,
        borderRadius: 5
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

    image : {
        backgroundColor: 'whitesmoke',
        width: '100%',
        height:250,
        justifyContent:'center',
        padding:10,
        overflow:'hidden'
    },

    title : {
        width: '100%',
        height:'auto',
        padding: 15
    },

    desc: {
        width: '100%',
        height: 'auto',
        elevation: 10,
        backgroundColor:'white',
        paddingHorizontal: 15,
        padding:10
    }

})

const mapStateTopProps = state => {
    return{
        loading:state.products.isLoading,
        detail:state.products.detailData,
        wishlist:state.wishlist.wishlistData,
        cart:state.cart.cartData,
        user:state.user.currentUser
    }
}

export default connect (mapStateTopProps) (withNavigation(Detail))