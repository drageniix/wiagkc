const setFetchedCalendar = (json) => ({
    type: "SET_CALENDAR",
    json
})

export const setCalendar = () => dispatch =>
    fetch("https://drageniix.github.io/api/wiakc.json")
        .then(response => response.json())
        .then(api => {
            dispatch(setFetchedCalendar(api))
            return api
        })