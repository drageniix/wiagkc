export const getErrors = errors =>
    errors &&
    errors.data &&
    errors.data.reduce(
        (prev, curr) => ({ ...prev, [curr.param]: curr.msg }),
        {}
    );
