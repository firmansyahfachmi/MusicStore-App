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

import {connect} from 'react-redux'
import {getProductsDetail} from '../Publics/Redux/Action/products'
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/AntDesign';

import harp from '../img/harp.png'

class Detail extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount = async () => {
        await this.props.dispatch(getProductsDetail(this.props.navigation.getParam('name')))
    }

    render(){
        return(
            <Fragment>
                <View style = {styles.header} >
                    
                    <TouchableOpacity style={{width:"15%",alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
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
                    />
                    <TouchableOpacity style={{width:"20%",alignItems:'center'}}>
                        <Icon name="shoppingcart" size={28} color="#fff" onPress={() => this.props.navigation.navigate('Keranjang')}/>
                    </TouchableOpacity>
              
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.props.detail.map(detail => (
                    <View key={detail.id}>
                        <View style={styles.image}>
                            <Image source={{uri : detail.url}} style={{flex:1,resizeMode:'contain',width:'100%'}}/>
                        </View>

                        <View style={styles.title}>
                            <View style={{alignItems:"flex-end",marginTop:-45,margibBottom:40,marginRight:5}}>
                                <Icon name="heart" size={30} color="grey" style={{backgroundColor:'white',padding:12,borderRadius:35, elevation:5}}/>
                            </View>
                            <View style={{flex:1,justifyContent: 'center'}}>
                                <Text style={{fontSize:19,fontWeight:'bold'}}>{detail.name}</Text>
                            </View>
                        
                            <View style={{flex:1,justifyContent: 'center'}}><Text style={{fontWeight:'700',color:'#fabc0c',fontSize:17}}>Rp. {detail.price}</Text></View>
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

                <View style={styles.footer}>
                    <TouchableOpacity activeOpacity={0.5} style={{flex:1,alignItems:'center'}}>
                        <Text style={{color: '#fabc0c',fontWeight:'bold', fontSize:17}}>Beli</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={styles.buttonCart}>
                        <Text style={{color: 'white',fontWeight:'700', fontSize:15}}>Tambah Ke Keranjang</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
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
        detail:state.products.detailData
    }
}

export default connect (mapStateTopProps) (withNavigation(Detail))