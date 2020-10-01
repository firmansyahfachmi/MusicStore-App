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
import {getTransaction} from '../Publics/Redux/Action/transaction'
import AsyncStorage from '@react-native-community/async-storage';


class History extends Component {
    constructor(){
        super()
        this.state = {
            iduser: '',
            token: '',
            user: '',
            header: ''
        }
    }

    componentDidMount = async () => {
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
        this.setState({header:header})
        await this.props.dispatch(getTransaction(this.state.header))
    }

    convertTimestamp = timestamp => {
    timestamp.toString();
    return timestamp.slice(0, 10);
    };


    render(){
        return(
            <Fragment>
   
                <ScrollView>
                    {this.props.transaction.map(data =>(
                    <View style={styles.div} key={data.id}>
                        <View style={styles.card}>
                            <View style={{backgroundColor:'whitesmoke',height:'auto',padding:10}}>
                                <Text>Tanggal : {this.convertTimestamp(data.created_date)}</Text>
                            </View>
                        
                            <View style={{flex:1,paddingVertical:10,paddingHorizontal:15}}>
                                <Text style={{flex:1,paddingVertical:2, color:'grey'}}>Nama Produk : {data.name}</Text>
                                <Text style={{flex:1,paddingVertical:2, color:'grey'}}>Category : {data.category_name}</Text>
                                <Text style={{flex:1,paddingVertical:2, color:'grey'}}>Quantity : {data.quantity}</Text>
                                <Text style={{flex:1,paddingVertical:2, color:'grey'}}>Cabang : {data.branch_name}</Text>
                            </View>
                            <View style={{padding:10,borderTopWidth:1,borderTopColor:'whitesmoke'}}>
                                <Text style={{fontWeight:'700'}}>Harga : Rp. {data.quantity * data.price}</Text>
                            </View>
                        </View>
                    </View>
                    ))}
                    
                </ScrollView>


            </Fragment>
        )
    }
}

const styles = StyleSheet.create({


    div : {
        width: '100%',
        height:'auto',
        justifyContent:'center',
        paddingHorizontal: 15,
        paddingVertical:15
    },

    card : {
        backgroundColor:'white',
        height: 'auto',
        borderRadius: 5,
        elevation:5
    }


})

const mapStateToProps = state => {
    return{
        transaction:state.transaction.transactionData
    }
}
export default connect(mapStateToProps) (withNavigation(History))
