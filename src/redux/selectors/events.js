export const getNextMeeting = events =>
    (events.length > 0 &&
        events.filter(item => item.date > Date.now() / 1000)[0]) || {
        title: 'Loading Events...'
    };
