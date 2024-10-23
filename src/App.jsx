import './App.css';
import Router from './routers/Router';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
