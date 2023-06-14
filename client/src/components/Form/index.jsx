import { useState, useContext } from 'react';
import { FormWrapper } from './styles';
import { Button, Title, Textfield } from 'ui';
import { useForm } from 'react-hook-form';
import { schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { getNumbers } from 'services';
import { DataContext } from 'store';
import axios from 'axios';

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const { setData } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const request = async (data) => {
    const controller = new AbortController();

    try {
      if (loading) {
        controller.abort();
      }

      const requestBody = {
        ...data,
        number: data.number.replaceAll('-', ''),
      };
      const { email, number } = requestBody;

      setLoading(true);
      await getNumbers(email, number, controller.signal)
        .then((data) => setData(data))
        .catch((e) => {
          if (axios.isCancel(e)) {
            console.error('Operation canceled');
          } else {
            console.error(e);
          }
        })
        .finally(() => setLoading(false));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormWrapper>
      <Title>Get Number</Title>
      <Textfield
        label="Email"
        placeholder="example@mail.com"
        name="email"
        error={errors.email?.message}
        register={register}
      />
      <Textfield
        label="Number"
        placeholder="12-34-56"
        name="number"
        error={errors.number?.message}
        isMasked={true}
        register={register}
      />
      <Button loading={loading} onClick={handleSubmit((data) => request(data))}>
        Sumbit
      </Button>
    </FormWrapper>
  );
};
