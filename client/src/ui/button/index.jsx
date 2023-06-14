import { ButtonComponent, Loader } from './styles';

export const Button = ({ loading, onClick, children }) => {
  return (
    <ButtonComponent onClick={onClick}>
      {loading ? <Loader /> : children}
    </ButtonComponent>
  );
};
