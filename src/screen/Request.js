import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';

import {connect} from 'react-redux'


class Request extends Component {
    constructor(){
        super()
        this.state = {
            formData : {
                name: '',
                email: '',
                request: ''
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
                <View style = {styles.header} >
                    
                    <TouchableOpacity style={{width:"15%",alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="arrowleft" size={28} color="#fff"/>
                    </TouchableOpacity>
                    
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Request Instrument</Text>
                    </View>
              
                </View>
                <ScrollView>
                    <View style={styles.div}>
                        <View>
                            <TextInput 
                            name="name"
                            placeholder="Nama" 
                            style={styles.input}/>

                            <TextInput 
                            name="email"
                            placeholder="Email" 
                            style={styles.input}/>

                            <TextInput 
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Request"
                            style={styles.input}/>

                        </View>
                        <View style={{alignItems:'flex-end', marginVertical:5}}>
                            <Button title="Submit" color='#fabc0c' onPress ={() => 
                            {
                                Toast.show({
                                    text: 'Berhasil Daftar',
                                    buttonText: 'OK',
                                    duration: 2000
                                })
                                
                            }
                        }/>
                        </View>

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

    input: {
        backgroundColor:'whitesmoke', 
        marginVertical:8,
        padding: 10,
        borderRadius: 5
    },

    div : {
        paddingTop: 20,
        width: '100%',
        height:'auto',
        elevation: 5,
        paddingHorizontal: 25,
        justifyContent:'center',
    },


})

export default connect() (withNavigation(Request))