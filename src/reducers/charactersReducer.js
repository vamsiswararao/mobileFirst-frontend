const initialState = { characters: [], next: null, previous: null,isLoading:false };

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_REQUEST':
        return {
          ...state,
          isLoading:false,
        };
    case 'DATA_SUCCESS':
      return {
        ...state,
        characters: action.payload.characters,
        next: action.payload.next,
        previous: action.payload.previous,
        isLoading:true,
      };
    default:
      return state;
  }
};

export default charactersReducer;
