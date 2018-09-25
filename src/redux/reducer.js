import data from '../generated/data/index.json'
data.imagePath = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/assets/images'

export default (state = data, action) => {
    switch (action.type) {
        case "SET_CALENDAR":
            return {
                ...state,
                calendar: action.json
            }
        default:
            return state
    }
}