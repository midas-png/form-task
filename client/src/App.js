import { Layout } from 'layout';
import { Theme } from 'domain';
import { GlobalStyle } from './globalStyles';
import { DataProvider } from 'store';

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <DataProvider>
        <Layout />
      </DataProvider>
    </Theme>
  );
};
