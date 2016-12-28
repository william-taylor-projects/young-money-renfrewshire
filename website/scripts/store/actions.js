
export const updateField = (section, name, value, weekly) => {
    return {
        type: 'UPDATE',
        section,
        value,
        name,
        weekly
    };
}

export const clearCal = () => {
    return { type: 'CLEAR_CALCULATOR' };
}

export const applyDefaults = () => {
    return { type: 'DEFAULTS' };
}

export const markers = (markers) => {
    return { type: 'MARKERS', markers };
}

export const news = (news) => {
    return { type: 'NEWS', news };
}

export const tips = (tips) => {
    return { type: 'TIPS', tips };
}

export const deals = (deals) => {
    return { type: 'DEALS', deals };
}