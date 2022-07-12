const handleRemoveFromCart = (cart, newItem, closeCartHandler) => {
    let changed = false
    const currCart = cart.cart
    
    if(currCart) {
        currCart.map((item, idx) => 
        {
            if(item.item.id === newItem.id) {
                if(currCart[idx].qnt === 1) {
                    currCart.splice(idx, 1)
                    if(closeCartHandler) {
                        closeCartHandler()
                    }
                    return currCart
                }
                currCart[idx].qnt -= 1
                changed = true
                return currCart
            }
        })
        if (!changed) {
            return cart.cart
        }
        return currCart
    }
}

const handleAddToCart = (cart, newItem) => {
    const currCart = cart.cart
        if(currCart) {
            let changed = false
            currCart.map((item, idx) => 
            {
                if(item.item.id === newItem.id) {
                currCart[idx].qnt += 1
                changed = true
                }
            }
            )
            if(!changed) {
            currCart.push({
                qnt: 1,
                item: newItem
            })
            return currCart
        }
        return currCart
    }
    return [{qnt: 1, item: newItem}]
}

const handleCountCartItems = (cart) => {
    let i = 0;
    cart?.map((item) => i = i + item.qnt)

    if(i !== 0) {
        return i
    }
    return false
}

const handleCountCartTotal = (cart, currency) => {
    const countCartTotal = (item) => {
        let amount = 0;
        item.item.prices.map((curr) => {
            if (curr.currency.label.toLowerCase() === currency.currency) {
                amount = curr.amount
            }
        })
        return amount
    }

    const getCurrentCurrency = (cart) => {
        let currencySymbol = 'UNDF'
        cart[0].item.prices.map((curr) => {
            if (curr.currency.label.toLowerCase() === currency.currency) {
                currencySymbol = curr.currency.symbol
            }
        })
        return currencySymbol
    }

    let currencyLabel = getCurrentCurrency(cart);
    let total = 0;

    cart.map((item) => {
        total = total + item.qnt * countCartTotal(item)
    })
    return {currSymbol: currencyLabel, total: total.toFixed(2)}
    }

export { handleRemoveFromCart, handleAddToCart, handleCountCartItems, handleCountCartTotal }