export default async function getReducer(){
    const data = await fetch("/assets/data/index.json").then(res => res.json())
    data.imagePath = window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/"))
    data.icons = data.icons || { unknown: "" }
    
    return (state = data, action) => {
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
}