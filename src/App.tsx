import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TopCity from "./pages/TopCity";
import Lakeshore from "./pages/Lakeshore";
import Leadership from "./pages/Leadership";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmoothScrollProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/top-city" element={<TopCity />} />
            <Route path="/lakeshore" element={<Lakeshore />} />
            <Route path="/leadership" element={<Leadership />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SmoothScrollProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
