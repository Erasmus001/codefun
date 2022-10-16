import "./App.css";
import AppRoutes from "./AppRoutes";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  // const queryClient = new QueryClient();
  return (
    <div className="app">
      {/* <QueryClientProvider client={queryClient}> */}
        <AppRoutes />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
