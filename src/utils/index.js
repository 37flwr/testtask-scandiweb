import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { handleAddToCart, handleRemoveFromCart, handleCountCartItems, handleCountCartTotal, handleChangeAttributes } from "./cartActions";
import { handleCategoryFetch, handleProductFetch, handleCurrenciesFetch } from "./apolloFetch";
import { getParams } from "./params.ts";

export { 
    capitalizeFirstLetter,
    handleAddToCart,
    handleRemoveFromCart,
    handleCountCartItems,
    handleCountCartTotal,
    handleChangeAttributes,
    handleCategoryFetch,
    handleProductFetch,
    handleCurrenciesFetch,
    getParams,
}