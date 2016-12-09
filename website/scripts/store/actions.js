
export function updateField(section, name, value) {
    return {
        type: 'UPDATE',
        section,
        value,
        name
    }
}

export function clearCal() {
    return {
        type: 'CLEAR_CALCULATOR'
    }
}

export function applyDefaults() {
    return {
        type: 'DEFAULTS'
    }
}

export function markers(markers) {
    return {
        type: 'MARKERS',
        markers
    }
}

export function news(news) {
    return {
        type: 'NEWS',
        news
    }
}

export function tips(tips) {
    return {
        type: 'TIPS',
        tips
    }
}

export function deals(deals) {
    return {
        type: 'DEALS',
        deals
    }
}