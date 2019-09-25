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



class Item extends Component {
    constructor(){
        super()
        this.state = {
            page: 1 
        }
    }
    
    componentDidMount= async () => {
        await this.props.dispatch(getProducts(this.props.navigation.getParam('category'), null, this.state.page))
    }

    render(){
        console.log('s',this.props)
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
                    <TouchableOpacity style={{width:"20%",alignItems:'center'}}>
                        <Icon name="shoppingcart" size={28} color="#fff" onPress={() => this.props.navigation.navigate('Keranjang')}/>
                    </TouchableOpacity>
              
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.item}>
                        <Carditem data={this.props.products}/>
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
        paddingTop:10
    },

})

const mapStateToProps = state => {
    return{
        products:state.products.productsData
    }
}
export default connect (mapStateToProps) (withNavigation(Item))