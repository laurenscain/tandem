import * as actionTypes from "./actionTypes";

export async function http(request: RequestInfo, headers:any): Promise<any> {
    const response = await fetch(request, headers);
    try {
        const body = await response.json();
        return {status:response.status, ok:true, data: body};
    } catch(e) {
        return {status:response.status, ok: false, error:'An error occurred'};
    }
  }

export function loadData(setId: string) {
    return async (dispatch: DispatchType) => {
        dispatch(setDataLoading(setId))

        const response = await http(`/data-set/${setId}`);
        if(!response.ok) {
            dispatch(setDataFail(response.error));
            return;
        }
        dispatch(setDataSuccess(response.data))
        
    }
}

export function addData(newData:number, setId: string) {
    return async (dispatch: DispatchType) => {
        dispatch(setAddLoading())

        const response = await http(`/data-set/${setId}`, {method:"POST", body:JSON.stringify({value:Number(newData)}) });
        
        if(!response.ok) {
            dispatch(setAddFail(response.error));
            return;
        }
        dispatch(setAddSuccess(response.data.value))
        
    }
}

const setDataLoading = () => ({
    type: actionTypes.LOADING_TILE_DATA
  })
const setDataSuccess = dataSet => ({
    type: actionTypes.LOAD_DATA_SUCCESS,
    dataSet
})
const setDataFail = error => ({
    type: actionTypes.LOAD_DATA_FAIL,
    error
})

const setAddLoading = () => ({
    type: actionTypes.ADDING_TILE_DATA
  })
const setAddSuccess = newData => ({
    type: actionTypes.ADD_DATA_SUCCESS,
    newData
})
const setAddFail = error => ({
    type: actionTypes.ADD_DATA_FAIL,
    error
})