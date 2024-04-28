import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { PokemonsSidebar } from "./components/PokemonsSidebar";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function InnerApp() {
  return (
    <div className="layout">
      <PokemonsSidebar />
      <Outlet />
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
