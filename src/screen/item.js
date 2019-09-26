import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Carditem from '../components/carditem'

import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';

import {connect} from 'react-redux'

import {getProducts} from '../Publics/Redux/Action/products'

import AsyncStorage from '@react-native-community/async-storage';


class Item extends Component {
    constructor(){
        super()
        this.state = {
            page: 1,
            iduser: '',
            search: ''
        }
    }
    
    componentDidMount= async () => {
        this.subscribe = this.props.navigation.addListener('didFocus', async () => {
            await this.props.dispatch(getProducts(this.props.navigation.getParam('category'), this.props.navigation.getParam('name'), this.state.page))
        })

        await AsyncStorage.getItem('userId').then(res =>{
            this.setState({
                iduser:Number(res)
            })
        })
        
    }

    handleChange = async (value) => {
        await this.setState({search: value});
    };

    redirect = () =>{
        this.props.dispatch(getProducts(this.props.navigation.getParam('category'), this.state.search, this.state.page))
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
                        onChangeText={(text)=>this.handleChange(text)}
                        onSubmitEditing={() => this.redirect()}
                    />
                    <TouchableOpacity style={{width:"20%",alignItems:'center'}}>
                        <Icon name="shoppingcart" size={28} color="#fff" onPress={() => this.props.navigation.navigate('Keranjang',{id:this.state.iduser})}/>
                    </TouchableOpacity>
              
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.item}>
                        {(this.props.products.length > 0) ?
                        <Carditem data={this.props.products}/>
                        :
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',height:500}}>
                            <Icon name="frown" size={50} style={{color:'silver'}}/>
                            <Text style={{fontSize:18,color:'silver',paddingTop:10}}>Data not found</Text>
                        </View>
                        }
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
    item: {
        width: '100%',
        paddingTop:10,
        flex:1,
    },

})

const mapStateToProps = state => {
    return{
        products:state.products.productsData
    }
}
export default connect (mapStateToProps) (withNavigation(Item))