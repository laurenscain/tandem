import * as actionTypes from "./actionTypes";

const initialState: TileState = {
    loading: false,
    adding: false,
    error: '',
    setId: '',
    tileData: [],
    availableProps: ['mean', 'median', 'mode']
};

const reducer = (
  state: TileState = initialState,
  action: TileAction
): TileState => {
  switch (action.type) {
    case actionTypes.LOADING_TILE_DATA:
    return {
        ...state,
        setId: action.setId,
        loading: true,
        error: '',
        tileData: []
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        setId: action.dataSet.id,
        tileData: action.dataSet.values ? [...action.dataSet.values] : [],
        loading: false,
        error: '',
      };

    case actionTypes.LOAD_DATA_FAIL:
        return {
            ...state,
            loading: true,
            error: action.error,
            tileData: []
          };
    case actionTypes.ADDING_TILE_DATA:
        return {
            ...state,
            adding: true,
            error: '',
        };
        
    case actionTypes.ADD_DATA_SUCCESS:
      return {
        ...state,
        tileData: [...state.tileData, action.newData],
        adding: false,
        error: ''
      };

    case actionTypes.ADD_DATA_FAIL:
        return {
            ...state,
            adding: false,
            error: action.error,
        };
        
    
  }
  return state;
};

export default reducer;
