import * as React from "react";
import { useSelector } from "react-redux";

type Props = {
  addData: (newData: number | any, setId: string) => void;
};

export const AddTileData: React.FC<Props> = ({ addData }) => {
  const [newData, setNewData] = React.useState<number>(0);
  const setId: string = useSelector((state: TileState) => state.setId);

  const handleTileData = (e: React.FormEvent<HTMLInputElement>) => {
    setNewData(Number(e.currentTarget.value));
  };

  const addNewData = (e: React.FormEvent) => {
    e.preventDefault();
    addData(newData, setId);
    setNewData(0);
  };

  return (
    <form onSubmit={addNewData} className="formData">
      <input type="number" value={newData || ''} onChange={handleTileData} />
      <button onClick={(e) => addNewData(e)} disabled={newData === undefined || newData === 0 ? true : false}>Add Number</button>
  </form>

  );
};
