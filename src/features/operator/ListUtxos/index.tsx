import { useListUtxosQuery } from '../operator.api';

export const ListUtxos = (): JSX.Element => {
  const { data: listUtxos, error: listUtxosError } = useListUtxosQuery({ accountIndex: 0 });
  return (
    <>
      {listUtxos?.unspentsList?.map(({ value, asset, outpoint }, index) => (
        <div key={index} className="mb-4">
          <p>
            <span className="font-bold">Value: </span>
            {value}
          </p>
          <p>
            <span className="font-bold">Asset: </span>
            {asset}
          </p>
          <p>
            <span className="font-bold">Outpoint Hash: </span>
            {outpoint?.hash}
          </p>
          <p>
            <span className="font-bold">Outpoint Index: </span>
            {outpoint?.index}
          </p>
        </div>
      ))}
      {listUtxosError && <p>{listUtxosError}</p>}
    </>
  );
};
