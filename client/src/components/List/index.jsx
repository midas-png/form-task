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
          <DataContent>
            {number.substring(0, 2) +
              '-' +
              number.substring(2, 4) +
              '-' +
              number.substring(4, 6)}
          </DataContent>
        </DataWrapper>
      ))}
    </ListWrapper>
  );
};
