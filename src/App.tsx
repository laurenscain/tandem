
import * as React from "react";
import { Tile } from "./components/Tile";
import { AddTileData } from "./components/AddTileData";
import { loadData, addData } from "./store/actionCreators";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import './styles.css'
import SelectSet from './components/SelectSet';

const App: React.FC = () => {
  const availableProps: string[] = useSelector((state: TileState) => state.availableProps);
  const setId: string = useSelector((state: TileState) => state.setId);
  const error: string = useSelector((state: TileState) => state.error);

  const dispatch: Dispatch<any> = useDispatch();

  const addTileData = React.useCallback(
    (newData, setId) => dispatch(addData(newData, setId)),
    [dispatch]
  );
  const loadTileData = React.useCallback(
    (setId) => dispatch(loadData(setId)),
    [dispatch]
  );
  

  return (
      <main>
       
        <h1>Dashboard <SelectSet selectedSet={setId} loadTileData={loadTileData} /></h1>
        {error && error != '' ?  <h3 className="errorTxt">{error}</h3> :
        <div>
          <div className="tileDiv">
            {availableProps.map((p: string) => (
              <Tile key={p} tile={p} />
            ))}
          </div>
          <AddTileData addData={addTileData} />
          </div>}
      </main>
  );
};

export default App;
