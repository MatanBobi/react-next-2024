import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { PokemonsList } from "./components/PokemonsList";

const queryClient = new QueryClient();

function InnerApp() {
  return (
    <div className="layout">
      <PokemonsList />
      <main></main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
    </QueryClientProvider>
  );
}

export default App;
