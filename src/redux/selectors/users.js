export const isAuth = (user, priv) => user.user && user.user.privilege >= priv;
