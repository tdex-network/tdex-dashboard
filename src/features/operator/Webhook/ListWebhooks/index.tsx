import { useListWebhooksQuery } from '../../operator.api';

export const ListWebhooks = (): JSX.Element => {
  const { data: listWebhookInfo, error: listWebhooksError } = useListWebhooksQuery({ action: 0 });
  return (
    <>
      {listWebhookInfo?.length
        ? listWebhookInfo?.map(({ id, endpoint, isSecured }, index) => (
            <div key={index} className="mb-4">
              <p>
                <span className="font-bold">Id: </span>
                {id}
              </p>
              <p>
                <span className="font-bold">endpoint: </span>
                {endpoint}
              </p>
              <p>
                <span className="font-bold">isSecured: </span>
                {isSecured}
              </p>
            </div>
          ))
        : 'No webhooks'}
      {listWebhooksError && <p>{listWebhooksError}</p>}
    </>
  );
};
