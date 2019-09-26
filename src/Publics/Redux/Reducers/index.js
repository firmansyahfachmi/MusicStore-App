import {
    combineReducers
} from 'redux';

// import branch from './branch.js'
import category from './category.js'
import products from './products.js'
import user from './user.js'
import wishlist from './wishlist.js'
import transaction from './transaction.js'
import cart from './cart.js'

const rootReducer = combineReducers({
    // branch,
    category,
    products,
    user,
    wishlist,
    transaction,
    cart
})

export default rootReducer;