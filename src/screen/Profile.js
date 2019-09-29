import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Button
} from 'react-native';
import {Toast} from 'native-base'

import {logout, login} from "../Publics/Redux/Action/user"
import {connect} from 'react-redux'

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';



class Profile extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            formData: {
                email: '',
                password: '',
            },
            isLogin: false
        }
    }
    
    componentDidMount = async () => {
        this.subscribe = this.props.navigation.addListener('didFocus', async () => {
            await AsyncStorage.getItem('token').then(res => {
                if(res !== null){
                    AsyncStorage.getItem('name').then((res) => {
                        if(res !== null){
                            
                            this.setState({name: res})
                        }
                    })
            
                    AsyncStorage.getItem('email').then((res) => {
                        if(res !== null){
                            
                            this.setState({email: res})
                        }
                    })
                    this.setState({isLogin: true})  
                    
                }
                
            })
        })
        
    }

    handleChange = (key, value) => {
        let formData = { ...this.state.formData };
        formData[key] = value;
        this.setState({formData});
    };

    render(){
        
        return(
            <Fragment>
                
                {/* LOGINED */}
                
                { (this.state.isLogin === true )? 
                <View>
                    <View style = {styles.header} >
                        <View style={{width:'40%', flexDirection:'row'}}>
                            <Text style={{marginLeft: 20,color:'white', fontWeight:'700', fontSize:20}}>Akun Saya</Text>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        
                    <View style={styles.div2}>
                        <View style={styles.img}>
                            <View style={styles.imgProfile}></View>
                        </View>
                        <View style={styles.profile}>
                            <Text style={{fontSize:22,fontWeight:'700'}}>{this.state.name}</Text>
                            <Text>{this.state.email}</Text>
                        </View>
                    </View>

                    <View style={styles.transaction}>
                        <TouchableOpacity activeOpacity={0.8} style={{alignItems:'center',flexDirection:'row'}} onPress = {() => this.props.navigation.navigate('History')}>
                            <Icon name="profile" size={20} color="grey"/>
                            <Text style={{fontSize:16, color:'grey'}}>&nbsp; Riwayat Transaksi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.logout}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.butLog} onPress = {() => 
                                {    
                                    AsyncStorage.removeItem("token");
                                    AsyncStorage.removeItem("userId");
                                    AsyncStorage.removeItem("name");
                                    AsyncStorage.removeItem("email");
                                    AsyncStorage.removeItem("level");
                                    
                                    this.props.dispatch(logout())
                                    this.setState({isLogin: false})
                                    this.props.navigation.navigate('Home')
                                    
                                }
                            }>
                            
                            <Text style={{fontSize:16, color:'red'}}><Icon name="logout" size={20} color="red"/>&nbsp; Sign Out</Text>
                        </TouchableOpacity>
                    </View> 
        
                </ScrollView>
            </View>
                :
            /* LOGIN FORM */
            <>
            <View style = {styles.header} >
                <TouchableOpacity style={{width:"10%",alignItems:'center'}} onPress={() => this.props.navigation.navigate('HomeTab')}>
                    <Icon name="arrowleft" size={28} color="#fff"/>
                </TouchableOpacity>

                <View style={{width:'40%', flexDirection:'row'}}>
                    <Text style={{marginLeft: 20,color:'white', fontWeight:'700', fontSize:20}}>Masuk</Text>
                </View>
            </View>

            <View style={styles.div1}>
                

                <View style={{marginVertical:15, marginHorizontal:5}}>
                    <Text style={{fontSize: 22,fontWeight:'bold'}}>Masuk Ke Akun</Text>
                </View>

                <View>
                    <TextInput 
                    name="email"
                    onChangeText={(text)=>this.handleChange('email',text)}
                    placeholder="Email" style={styles.input}/>

                    <TextInput
                    name="password"
                    onChangeText={(text)=>this.handleChange('password',text)}
                    secureTextEntry={true} placeholder="Password" style={styles.input}/>
                </View>
                <View style={{alignItems:'flex-end', marginVertical:5}}>
                    <Button title="Masuk"color='#fabc0c' onPress = {() => 
                    this.props.dispatch(login(this.state.formData))
                    .then(() => {
                    
                        
                        AsyncStorage.setItem("token", this.props.user.token);
                        AsyncStorage.setItem("userId", this.props.user.id.toString());
                        AsyncStorage.setItem("name", this.props.user.name);
                        AsyncStorage.setItem("email", this.props.user.email);
                        AsyncStorage.setItem("level", this.props.user.level.toString());

                        Toast.show({
                            text: 'Berhasil Login',
                            buttonText: 'Okay',
                            duration: 3000
                          })
                        this.props.navigation.navigate('Home')
                
                    })
                    .catch(err => {
                        alert(err);
                    })
                    }/>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center', marginTop:100}}>
                    <Text style={{fontSize:16}}>Tidak Punya Akun ?</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress = {() => this.props.navigation.navigate('Daftar')}>
                        <Text style={{fontSize:16,fontWeight:'700',color:'#fabc0c'}}> Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
            }
                
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

    input: {
        backgroundColor:'whitesmoke', 
        marginVertical:8,
        padding: 10,
        borderRadius: 5
    },

    div1 : {
        flex: 1,
        width: '100%',
        height:170,
        elevation: 5,
        paddingHorizontal: 25,
        justifyContent:'center',
    },
    

    div2 : {
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

const mapStateToProps = state => {
    return{
        user:state.user.currentUser
    }
}

export default connect (mapStateToProps) (withNavigation(Profile))