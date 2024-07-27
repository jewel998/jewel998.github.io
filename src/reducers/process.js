const initialState = {
    processes: []
};

const SystemReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        default:
            return { ...initialState, ...state };
    }
}

export default SystemReducer;