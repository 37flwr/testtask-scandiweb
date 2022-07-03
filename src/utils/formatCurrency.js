const formatCurrency = (type) => {
    if(type.toLowerCase() === 'usd') {
        return '$ USD'
    } else if (type.toLowerCase() === 'eur') {
        return '€ EUR'
    }
    return '¥ JPY'
}

export default formatCurrency