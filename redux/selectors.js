
// FAVORITES

export const areFavoritesLoading = (store) => {
    return store && store.favorites.isLoading
}

export const getFavorites = (ascending = true) => (store) => {
    const sortFunction = ascending ?
        ((a, b) => (a > b) ? 1 : (a < b) ? -1 : 0) :
        ((a, b) => (b > a) ? 1 : (b < a) ? -1 : 0)
    return store && store.favorites.favorites.sort(sortFunction)
}

export const checkIsFavorite = (word) => (store) => {
    return store && store.favorites.favorites.includes(word)
}




// WORD

export const isWordLoading = (store) => {
    return store && store.word.isLoading
}

export const getWord = (store) => {
    return store && store.word.word
}



// WORD OF THE DAY

export const isWordOfTheDayLoading = (store) => {
    return store && store.wordoftheday.isLoading
}

export const getWordOfTheDay = (store) => {
    return store && store.wordoftheday.wordOfTheDay
}