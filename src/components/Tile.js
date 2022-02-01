import * as React from "react";
import * as utils from '../utils.ts';
import { useSelector } from "react-redux";

type Props = {
  tile: string;
};

export const Tile: React.FC<Props> = ({ tile }) => {

  const tileData: Array<number> = useSelector((state: TileState) => state.tileData);
  const [value, setValue] = React.useState('');

  const getValue = () => {
    let v = utils[tile](tileData);

    if(Number.isNaN(v) || v === 'NaN') v = '';
    else if(typeof v === 'object') 
      v = v.join(', ');
    else if(v)
        v = v % 1 != 0 ? v.toPrecision(5) : v;

    setValue(v);
  };

  React.useEffect(() => {
    getValue();
  }, [tile, tileData]);
  

  return (
    <div className="Tile">
        <span>{tile}: {value}</span>
    </div>
  );
};

export default Tile;