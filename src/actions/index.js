export const flip = (bool) => {
    return {
        type: "FLIP",
        payload: bool
    };
};