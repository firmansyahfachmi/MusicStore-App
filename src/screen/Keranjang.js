import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import {Icon} from 'native-base';
import { withNavigation } from 'react-navigation';



class Keranjang extends Component {
    render(){
        return(
            <Fragment>
                <View style = {styles.header} >
                    
                    <TouchableOpacity style={{width:"15%",alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon type="AntDesign" name="arrowleft" size={28} style={{color:'white'}}/>
                    </TouchableOpacity>
                    
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Keranjang</Text>
                    </View>
              
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.div}>
                        <View style={styles.img}>
                            <View style={styles.imgProfile}></View>
                        </View>
                        <View style={styles.profile}>
                            <Text style={{fontSize:20,fontWeight:'700',color:'grey'}}>Name</Text>
                            <Text style={{fontSize:16, fontWeight:'700',color:'grey'}}>Rp. 99.000</Text>
                            <View style={{flex:1,alignItems:'flex-end',paddingBottom:35, flexDirection:'row'}}>
                                <TouchableOpacity style={{marginRight:10}}><Icon type="EvilIcons" name="trash" size={35}/></TouchableOpacity>
                                <TouchableOpacity><Icon type="EvilIcons" name="minus" size={35}/></TouchableOpacity>
                                <View style={{marginHorizontal:15}}><Text style={{fontSize:20}}>1</Text></View>
                                <TouchableOpacity><Icon type="EvilIcons" name="plus" size={35}/></TouchableOpacity>
                            </View>
                        </View>
                       
                    </View>

                    <View style={styles.div}>
                        <View style={styles.img}>
                            <View style={styles.imgProfile}></View>
                        </View>
                        <View style={styles.profile}>
                            <Text style={{fontSize:20,fontWeight:'700',color:'grey'}}>Name</Text>
                            <Text style={{fontSize:16, fontWeight:'700',color:'grey'}}>Rp. 99.000</Text>
                            <View style={{flex:1,alignItems:'flex-end',paddingBottom:35, flexDirection:'row'}}>
                                <TouchableOpacity style={{marginRight:10}}><Icon type="EvilIcons" name="trash" size={35}/></TouchableOpacity>
                                <TouchableOpacity><Icon type="EvilIcons" name="minus" size={35}/></TouchableOpacity>
                                <View style={{marginHorizontal:15}}><Text style={{fontSize:20}}>1</Text></View>
                                <TouchableOpacity><Icon type="EvilIcons" name="plus" size={35}/></TouchableOpacity>
                            </View>
                        </View>
                       
                    </View>
            
                </ScrollView>

                <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.5} style={{flex:1,alignItems:'center'}} onPress= {() => this.props.navigation.navigate('Home')}>
                            <Icon type="AntDesign" name="home" size={22} color="grey"/>
                            <Text style={{color: 'grey', fontSize:13}}>Home</Text>
                        </TouchableOpacity>
                    </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({

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
        backgroundColor: 'silver',
        width: 100,
        height:100,
        padding: 15,
        borderRadius: 5,
    },

})

export default withNavigation(Keranjang)