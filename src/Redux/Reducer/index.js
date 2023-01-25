const initial_data = {
    data: 0

}

const Slider_Reducer = (state = initial_data, action) => {
    switch (action.type) {
        case 'SELECTED_ITEM':
            return { ...state, data: action.payload}

        default:
            return state
    }
}

export default Slider_Reducer