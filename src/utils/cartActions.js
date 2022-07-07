const handleRemoveFromCart = (cart, newItem) => {
    let changed = false
    const currCart = cart.cart
    
    if(currCart) {
        currCart.map((item, idx) => 
        {
            if(item.item.id === newItem.id) {
                if(currCart[idx].qnt === 1) {
                    currCart.splice(idx, 1)
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

export { handleRemoveFromCart, handleAddToCart, handleCountCartItems }