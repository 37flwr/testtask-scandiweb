import formatCurrency from "./formatCurrency";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { handleAddToCart, handleRemoveFromCart, handleCountCartItems, handleCountCartTotal, handleChangeAttributes } from "./cartActions";
import { handleCategoryFetch, handleProductFetch, handleCurrenciesFetch } from "./apolloFetch";
import { isEqual } from "./isEqualCheck";
import { getParams } from "./params.ts";

export { 
    formatCurrency, 
    capitalizeFirstLetter, 
    isEqual,
    getParams,
    handleAddToCart, 
    handleRemoveFromCart, 
    handleCountCartItems, 
    handleCountCartTotal,
    handleChangeAttributes,
    handleCategoryFetch,
    handleProductFetch,
    handleCurrenciesFetch
}