interface ITile {
    value: number,
    prop: string
  }
  
  type TileState = {
    availableProps: Array<string>
    setId: string
    tileData: Array<number>
    loading: Boolean
    adding: Boolean
    error: string
  }
  
  type TileAction = {
    type: string
    dataSet: {id: string, values: Array<number>}
    tileData:  Array<number>
    newData: number
    error: string
    setId: string
  }
  
  type DispatchType = (args: TileAction) => TileAction