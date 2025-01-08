interface CartReducerProps {
    state: any;
    action: any;
}
const cartReducer = ({ state, action }: CartReducerProps) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default cartReducer;