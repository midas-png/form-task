import { useContext } from 'react';
import { DataContext } from 'store';
import { ListWrapper, DataWrapper, DataContent } from './styles';

export const List = () => {
  const { data } = useContext(DataContext);
  return (
    <ListWrapper>
      {data.length !== 0 && (
        <DataWrapper>
          <DataContent>Email</DataContent>
          <DataContent>Number</DataContent>
        </DataWrapper>
      )}
      {data.map(({ email, number }) => (
        <DataWrapper key={email + number}>
          <DataContent>{email}</DataContent>
          <DataContent>{number}</DataContent>
        </DataWrapper>
      ))}
    </ListWrapper>
  );
};
