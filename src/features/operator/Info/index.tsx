import { useGetInfoQuery } from '../operator.api';

export const Info = (): JSX.Element => {
  const { data: info, error: getInfoError } = useGetInfoQuery();
  return (
    <div className="card bordered">
      <div className="card-body">
        <p>
          <span className="font-bold">Root Path: </span>
          {info?.rootPath}
        </p>
        <p>
          <span className="font-bold">Master Blinding Key: </span>
          {info?.masterBlindingKey}
        </p>
        {info?.accountInfoList.map((acc, index) => (
          <div className="mt-2" key={index}>
            <p>
              <span className="font-bold">Account Index: </span>
              {acc.accountIndex}
            </p>
            <p>
              <span className="font-bold">Derivation Path: </span>
              {acc.derivationPath}
            </p>
            <p className="break-all">
              <span className="font-bold">Extended Public key: </span>
              {acc.xpub}
            </p>
            <p>
              <span className="font-bold">Last External Derived: </span>
              {acc.lastExternalDerived}
            </p>
            <p>
              <span className="font-bold">Last Internal Derived: </span>
              {acc.lastInternalDerived}
            </p>
          </div>
        ))}
        <p>{getInfoError}</p>
      </div>
    </div>
  );
};
