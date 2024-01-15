import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}> */}
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
        {/* </GoogleOAuthProvider> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
