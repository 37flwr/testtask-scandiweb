const handleAddToCart = (cart, item, attributes) => {
    const myCart = cart.cart;

    if(myCart) {
        let changed = false;

        myCart.forEach((cartItem, idx) => {
            if(cartItem.item.id === item.id) {
                myCart[idx].qnt += 1
                changed = true
            }
        })

        if(!changed) {
            myCart.push({
                qnt: 1,
                attributes,
                item: item
            })
        }

        return myCart
    }

    return [{qnt: 1, attributes, item: item}]
}

const handleRemoveFromCart = (cart, item, closeCartHandler) => {
    const myCart = cart.cart
    
    if(myCart) {
        let changed = false
        myCart.forEach((cartItem, idx) => 
            {
                if(cartItem.item.id === item.id) {
                    if(myCart[idx].qnt === 1) {
                        myCart.splice(idx, 1)
                        if(closeCartHandler) {
                            closeCartHandler()
                        }
                        return myCart
                    }
                    myCart[idx].qnt -= 1
                    changed = true
                }
                return myCart
            })
        if (!changed) {
            return cart.cart
        }
        return myCart
    }
}

const handleChangeAttributes = (attributes, item, cart) => {
    const currCart = cart.cart

    currCart.forEach((cartItem, idx) => {
        if(cartItem.item.id === item.id) {
            currCart[idx].attributes = attributes
        }
    })

    return currCart
}

const handleCountCartItems = (cart) => {
    const total = cart?.reduce((a, b) => a + b.qnt, 0)
    if(total !== 0) {
        return total
    }
    return false
}

const handleCountCartTotal = (cart, currency) => {
    const countItemTotal = (item) => {
        let amount = 0;
        item.item.prices.forEach(curr => {
            if (curr.currency.label.toLowerCase() === currency.currency) {
                amount = curr.amount
            }
        })
        return amount
    }

    const getCurrentCurrency = (cart) => {
        let currencySymbol = 'UNDF'
        cart[0]?.item.prices.forEach((curr) => {
            if (curr.currency.label.toLowerCase() === currency.currency) {
                currencySymbol = curr.currency.symbol
            }
        })
        return currencySymbol
    }

    const currencyLabel = getCurrentCurrency(cart);
    const total = cart.reduce((a, b) => 
        a + b.qnt * countItemTotal(b), 0
    )

    return {currSymbol: currencyLabel, total: total.toFixed(2)}
}

export { handleRemoveFromCart, handleAddToCart, handleCountCartItems, handleCountCartTotal, handleChangeAttributes }