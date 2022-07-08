import formatCurrency from "./formatCurrency";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { handleAddToCart, handleRemoveFromCart, handleCountCartItems, handleCountCartTotal } from "./cartActions";
import { handleCategoryFetch, handleProductFetch } from "./apolloFetch";
import { getParams } from "./params.ts";
import { hashing, parse } from "./hash.ts"

export { 
    formatCurrency, 
    capitalizeFirstLetter, 
    getParams, 
    hashing, 
    parse, 
    handleAddToCart, 
    handleRemoveFromCart, 
    handleCountCartItems, 
    handleCountCartTotal,
    handleCategoryFetch,
    handleProductFetch
}