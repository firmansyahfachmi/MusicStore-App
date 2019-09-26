import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';

import {connect} from 'react-redux'
import {register} from '../Publics/Redux/Action/user'


class Daftar extends Component {
    constructor(){
        super()
        this.state = {
            formData : {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    handleChange = (key, value) => {
        let formData = { ...this.state.formData };
        formData[key] = value;
        this.setState({formData});
    };

    render(){
        return(
            <Fragment>
                <View style={styles.div}>
                    <View style={{marginVertical:15, marginHorizontal:5}}><Text style={{fontSize: 22,fontWeight:'bold'}}>Buat Akun</Text></View>
                    <View>
                        <TextInput 
                        placeholder="Name" 
                        name="name"
                        onChangeText={(text)=>this.handleChange('name',text)}
                        style={styles.input}/>

                        <TextInput 
                        name="email"
                        onChangeText={(text)=>this.handleChange('email',text)}
                        placeholder="Email" style={styles.input}/>

                        <TextInput 
                        secureTextEntry={true}
                        placeholder="Password"
                        name="password"
                        onChangeText={(text)=>this.handleChange('password',text)}
                        style={styles.input}/>

                    </View>
                    <View style={{alignItems:'flex-end', marginVertical:5}}>
                        <Button title="Daftar" color='#fabc0c' onPress ={() => 
                        {
                            this.props.dispatch(register(this.state.formData)).then(res =>{
                                Toast.show({
                                    text: 'Berhasil Daftar',
                                    buttonText: 'OK',
                                    duration: 2000
                                  })
                                this.props.navigation.navigate('Home')
                            })
                            
                        }
                    }/>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center', marginTop:100}}>
                        <Text style={{fontSize:16}}>Sudah Punya Akun ?</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={{fontSize:16,fontWeight:'700',color:'#fabc0c'}}> Masuk</Text>
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

export default connect() (withNavigation(Daftar))