export const isAuth = (user, priv) => user.user && user.user.privilege >= priv;
export const getMemberStatus = status => {
    switch (status) {
        case 0:
            return 'New Member';
        case 1:
            return 'Active Member';
        case 2:
            return 'Board Member';
        case 3:
            return 'Administrator';
    }
};
