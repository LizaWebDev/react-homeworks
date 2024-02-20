interface LoadingState {
    isLoading: boolean;
}

const initState: LoadingState = {
    isLoading: false,
}

type LoadingAction = {
    type: 'CHANGE_LOADING';
    isLoading: boolean;
}

export const loadingReducer = (state: LoadingState = initState, action: LoadingAction): LoadingState => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
}

export const loadingAC = (isLoading: boolean): LoadingAction => ({
    type: 'CHANGE_LOADING',
    isLoading,
})