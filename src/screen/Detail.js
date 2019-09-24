import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';



class Item extends Component {
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
                    <View style={{width:"20%",alignItems:'center'}}>
                        <Icon name="shoppingcart" size={28} color="#fff"/>
                    </View>
              
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.image}>

                    </View>

                    <View style={styles.title}>
                        <View style={{alignItems:"flex-end",marginTop:-45,marginRight:5}}>
                            <Icon name="heart" size={30} color="grey" style={{backgroundColor:'white',padding:12,borderRadius:35, elevation:5}}/>
                        </View>
                        <View style={{flex:1,justifyContent: 'center'}}>
                            <Text style={{fontSize:19,fontWeight:'bold'}}>Name</Text>
                        </View>
                       
                        <View style={{flex:1,justifyContent: 'center'}}><Text style={{fontWeight:'700',color:'#fabc0c',fontSize:17}}>Rp. 90.000</Text></View>
                    </View>

                    <View style={styles.desc}>
                        <View>
                            <Text style={{fontSize:17,fontWeight:'700',color:'grey'}}>Informasi Produk</Text>
                        </View>
                        <View style={{paddingTop:15,flex:1}}>
                            <Text style={{fontSize:15,color:'grey'}}>Stok :</Text>
                        </View>
                        <View style={{paddingVertical:15}}>
                            <Text style={{fontSize:15,color:'grey'}}>Cabang :</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:17,fontWeight:'700',color:'grey'}}>Deskripsi Produk</Text>
                        </View>
                        <View style={{paddingTop:5}}>
                            <Text style={{fontSize:14,color:'grey'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus non nunc at condimentum. Suspendisse accumsan quis nulla viverra tempus. Donec orci justo, malesuada sed nulla vitae, auctor feugiat turpis. Nunc vel enim accumsan, venenatis dolor a, iaculis ex. Etiam viverra consequat dapibus. Ut at tempus dui. Mauris vestibulum vestibulum mi, sit amet dictum tortor varius id. Donec facilisis erat nec nisl congue tempor.
                            </Text>
                        </View>
                    </View>
            
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
        backgroundColor: 'silver',
        width: '100%',
        height:250
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

export default withNavigation(Item)