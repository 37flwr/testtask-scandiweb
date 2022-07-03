const formatCurrency = (type, style) => {
    if(type.toLowerCase() === 'usd' && style === 'full') {
        return '$ USD'
    } else if (type.toLowerCase() === 'usd' && style === 'short') {
        return '$'
    } else if (type.toLowerCase() === 'eur' && style === 'full') {
        return '€ EUR'
    } else if (type.toLowerCase() === 'eur' && style === 'short') {
        return '€'
    } else if (type.toLowerCase() === 'jpy' && style === 'full') {
        return '¥ JPY'
    } else if (type.toLowerCase() === 'jpy' && style === 'short') {
        return '¥'
    }
    return 'UNDF'
}

export default formatCurrency