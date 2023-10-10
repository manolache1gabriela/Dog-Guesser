import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
