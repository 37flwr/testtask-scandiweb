import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { handleAddToCart, handleRemoveFromCart, handleCountCartItems, handleCountCartTotal, handleChangeAttributes } from "./cartActions";
import { handleCategoryFetch, handleProductFetch, handleCurrenciesFetch } from "./apolloFetch";
import { getParams } from "./params.ts";

export { 
    capitalizeFirstLetter, 
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