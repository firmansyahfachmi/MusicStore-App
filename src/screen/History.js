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


class History extends Component {
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
   
                <ScrollView>
                    <View style={styles.div}>
                        <View style={styles.card}>
                            <Text></Text>
                        </View>

                    </View>
                </ScrollView>


            </Fragment>
        )
    }
}

const styles = StyleSheet.create({


    div : {
        backgroundColor: 'red',
        width: '100%',
        height:'auto',
        justifyContent:'center',
        padding: 10,
    },

    card : {
        backgroundColor:'white',
        height: 100,
        borderRadius: 5,
        elevation:5
    }


})

export default connect() (withNavigation(History))