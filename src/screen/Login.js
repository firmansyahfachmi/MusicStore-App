import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

import {login} from "../Publics/Redux/Action/user"
import {connect} from 'react-redux'

import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';


class Login extends Component {
    constructor(){
        super()
        this.state = {
            formData: {
                email: '',
                password: ''
            }
        }
    }

    handChange = (key, value) => {
        let formData = { ...this.state.formData };
        formData[key] = value;
        this.setState({formData});
    };

    submitLogin = () => {
        this.props.dispatch(login(this.state.formData))
        .then(() => {
        if(this.props.user == null){
            alert('Wrong Email or Password')
        }else{
            AsyncStorage.setItem("token", this.props.user.token);
            AsyncStorage.setItem("userId", this.props.user.id);
            AsyncStorage.setItem("name", this.props.user.name);
            AsyncStorage.setItem("email", this.props.user.email);
            AsyncStorage.setItem("level", this.props.user.level);

            alert('Berhasil Login!')
            this.props.navigation.navigate('Home')
        }
       
        })
        .catch(err => {
            alert(err);
        });
    }

    render(){
        return(
            <Fragment>
                <View style = {styles.header} >
                    
                    <TouchableOpacity style={{width:"15%",alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="arrowleft" size={28} color="#fff"/>
                    </TouchableOpacity>
                    
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Masuk</Text>
                    </View>
              
                </View>
                
                    
                <View style={styles.div}>
                    <View style={{marginVertical:15, marginHorizontal:5}}><Text style={{fontSize: 22,fontWeight:'bold'}}>Masuk Ke Akun</Text></View>
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
                        <Button title="Masuk"color='#fabc0c' onPress = {() => this.submitLogin}/>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center', marginTop:100}}>
                        <Text style={{fontSize:16}}>Tidak Punya Akun ?</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress = {() => this.props.navigation.navigate('Daftar')}>
                            <Text style={{fontSize:16,fontWeight:'700',color:'#fabc0c'}}> Daftar</Text>
                        </TouchableOpacity>
                    </View>
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

    input: {
        backgroundColor:'whitesmoke', 
        marginVertical:8,
        padding: 10,
        borderRadius: 5
    },

    div : {
        flex: 1,
        width: '100%',
        height:170,
        elevation: 5,
        paddingHorizontal: 25,
        justifyContent:'center',
    },


})

const mapStateToProps = state => {
    return{
        user:state.user.currentUser
    }
}

export default connect (mapStateToProps) (withNavigation(Login))