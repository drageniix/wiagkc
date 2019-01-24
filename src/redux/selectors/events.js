export const getNextMeeting = (events, loading) =>
    (loading && { title: 'Loading Events...' }) ||
    (events.length > 0 &&
        events.filter(item => item.date > Date.now() / 1000)[0]) || {
        title: 'No 2019 Events yet!'
    };
