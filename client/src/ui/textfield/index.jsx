import {
  TextfieldWrapper,
  TextfieldLabel,
  TextfieldComponent,
  TextfieldError,
} from './styles';

export const Textfield = ({
  label,
  placeholder,
  error,
  name,
  isMasked,
  register,
}) => {
  const handleMaskedChange = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/\D/g, '');
    value = value.substring(0, 6);
    value = value.replace(/^(\d{2})(\d)/g, '$1-$2');
    value = value.replace(/(\d{2})(\d)/, '$1-$2');
    e.target.value = value;
  };

  return (
    <TextfieldWrapper>
      {label && <TextfieldLabel>{label}</TextfieldLabel>}
      <TextfieldComponent
        placeholder={placeholder}
        name={name}
        error={error}
        {...register(name)}
        onChange={isMasked && handleMaskedChange}
      />
      {error && <TextfieldError>{error}</TextfieldError>}
    </TextfieldWrapper>
  );
};
