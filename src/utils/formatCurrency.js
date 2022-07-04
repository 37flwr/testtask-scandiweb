const formatCurrency = (type, style) => {
    if(type.toLowerCase() === 'usd') {
        return '$'
    } else if (type.toLowerCase() === 'eur') {
        return '€'
    } else if (type.toLowerCase() === 'jpy') {
        return '¥'
    } else if (type.toLowerCase() === 'gbp') {
        return '£'
    } else if (type.toLowerCase() === 'aud') {
        return 'A$'
    } else if (type.toLowerCase() === 'rub') {
        return '₽'
    }
    return 'UNDF'
}

export default formatCurrency