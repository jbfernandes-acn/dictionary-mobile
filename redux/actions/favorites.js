import { 
    START_FAVORITES_REQUEST, 
    END_RETRIEVE_FAVORITES_REQUEST, 
    END_SAVE_FAVORITES_REQUEST, 
    ADD_FAVORITE, 
    REMOVE_FAVORITE 
} from '../actionTypes'

import { getData } from '../../resources/storage';

const startFavoritesRequest = () => ({
    type: START_FAVORITES_REQUEST
})

const endGetFavoritesRequest = (favorites) => ({
    type: END_RETRIEVE_FAVORITES_REQUEST,
    favorites: favorites
})

export const retrieveFavoritesFromStorage = () => {
    return (dispatch) => {
        dispatch(startFavoritesRequest())
        getData('favorites').then(data => {
            const favorites = JSON.parse(data) || [];
            dispatch(endGetFavoritesRequest(favorites))
        }).catch(error => {
            dispatch(endGetFavoritesRequest([]))
        });
    }
}

export const addFavorite = (newFavorite) => ({
    type: ADD_FAVORITE,
    newFavorite: newFavorite
})

export const removeFavorite = (favoriteToRemove) => ({
    type: REMOVE_FAVORITE,
    favoriteToRemove: favoriteToRemove
})