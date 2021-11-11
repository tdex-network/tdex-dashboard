import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Market, Price } from '../../../../api-spec/generated/js/types_pb';
import { useUpdateMarketPriceMutation } from '../../operator.api';

interface IFormInputs {
  market: Market.AsObject;
  price: Price.AsObject;
}

interface UpdateMarketPriceFormProps {
  market?: Market.AsObject;
}

export const UpdateMarketPriceForm = ({ market }: UpdateMarketPriceFormProps): JSX.Element => {
  const [updateMarketPrice, { error: updateMarketPriceError }] = useUpdateMarketPriceMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!market) return;
    updateMarketPrice({
      price: { basePrice: data.price.basePrice, quotePrice: data.price.quotePrice },
      market: market,
    });
    document.getElementById('update-market-price-modal')?.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Base Price</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.price?.basePrice?.message })}
          {...register('price.basePrice', { required: 'Base price is required' })}
        />
        <ErrorMessage
          errors={errors}
          name="price.basePrice"
          as={<span className="text-sm mt-1 text-error" />}
        />

        <label className="label">
          <span className="label-text">Quote Price</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.price?.quotePrice?.message })}
          {...register('price.quotePrice', { required: 'Quote price is required' })}
        />
        <ErrorMessage
          errors={errors}
          name="price.quotePrice"
          as={<span className="text-sm mt-1 text-error" />}
        />

        {updateMarketPriceError && <span className="text-sm text-error">{updateMarketPriceError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Update Market Price</button>
    </form>
  );
};
