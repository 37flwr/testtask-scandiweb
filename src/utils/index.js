import formatCurrency from "./formatCurrency";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { handleAddToCart, handleRemoveFromCart, handleCountCartItems, handleCountCartTotal, handleChangeAttributes } from "./cartActions";
import { handleCategoryFetch, handleProductFetch } from "./apolloFetch";
import { isEqual } from "./isEqualCheck";
import { getParams } from "./params.ts";
import { hashing, parse } from "./hash.ts"

export { 
    formatCurrency, 
    capitalizeFirstLetter, 
    isEqual,
    getParams, 
    hashing, 
    parse, 
    handleAddToCart, 
    handleRemoveFromCart, 
    handleCountCartItems, 
    handleCountCartTotal,
    handleChangeAttributes,
    handleCategoryFetch,
    handleProductFetch
}