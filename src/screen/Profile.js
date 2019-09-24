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

import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';



class Profile extends Component {
    render(){
        return(
            <Fragment>
                <View style = {styles.header} >
                    
                    <TouchableOpacity style={{width:"15%",alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="arrowleft" size={28} color="#fff"/>
                    </TouchableOpacity>
                    
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Akun Saya</Text>
                    </View>
              
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.div}>
                        <View style={styles.img}>
                            <View style={styles.imgProfile}></View>
                        </View>
                        <View style={styles.profile}>
                            <Text style={{fontSize:22,fontWeight:'700'}}>Name</Text>
                            <Text>Email@mail.com</Text>
                        </View>
                    </View>

                    <View style={styles.transaction}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Icon name="profile" size={20} color="grey"/>
                            <Text style={{fontSize:16, color:'grey'}}>&nbsp; Riwayat Transaksi</Text>
                        </View>
                    </View>

                    <View style={styles.logout}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.butLog} onPress = {() => this.props.navigation.navigate('Login')}>
                            
                            <Text style={{fontSize:16, color:'red'}}><Icon name="logout" size={20} color="red"/>&nbsp; Sign Out</Text>
                        </TouchableOpacity>
                    </View>
            
                </ScrollView>

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
        elevation: 20
    },

    div : {
        backgroundColor:'white',
        width: '100%',
        height:170,
        elevation: 5,
        paddingHorizontal: 20,
        justifyContent:'center',
        flexDirection: 'row'
    },

    profile : {
        flex: 1,
        justifyContent:'center'
    },

    img : {
        width: '35%',
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:25
    },

    imgProfile: {
        backgroundColor: 'silver',
        width: 100,
        height:100,
        padding: 15,
        borderRadius: 65,
    },

    transaction : {
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        marginTop: 20,
        elevation: 5,
        paddingHorizontal: 30,
        paddingVertical: 15
    },

    logout : {
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems:'flex-end'
    },

    butLog : {
        alignItems:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'red',
        padding:10,
        borderRadius: 5,
    }

})

export default withNavigation(Profile)