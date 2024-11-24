import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import Games from "./pages/Games";
import Story from "./pages/Story";
import Story1 from "./pages/stories/Story1";
import Story2 from "./pages/stories/Story2";
import Story3 from "./pages/stories/Story3";
import Story4 from "./pages/stories/Story4";
import Lesson1 from "./pages/lesson/1";
import Lesson2 from "./pages/lesson/2";
import Lesson3 from "./pages/lesson/3";
import Lesson4 from "./pages/lesson/4";
import Lesson5 from "./pages/lesson/5";
import Lesson6 from "./pages/lesson/6";
import Lesson7 from "./pages/lesson/7";
import Lesson8 from "./pages/lesson/8";
import Lesson9 from "./pages/lesson/9";
import Lesson10 from "./pages/lesson/10";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/games" element={<Games />} />
          <Route path="/story" element={<Story />} />
          <Route path="/story/1" element={<Story1 />} />
          <Route path="/story/2" element={<Story2 />} />
          <Route path="/story/3" element={<Story3 />} />
          <Route path="/story/4" element={<Story4 />} />
          <Route path="/lesson/1" element={<Lesson1 />} />
          <Route path="/lesson/2" element={<Lesson2 />} />
          <Route path="/lesson/3" element={<Lesson3 />} />
          <Route path="/lesson/4" element={<Lesson4 />} />
          <Route path="/lesson/5" element={<Lesson5 />} />
          <Route path="/lesson/6" element={<Lesson6 />} />
          <Route path="/lesson/7" element={<Lesson7 />} />
          <Route path="/lesson/8" element={<Lesson8 />} />
          <Route path="/lesson/9" element={<Lesson9 />} />
          <Route path="/lesson/10" element={<Lesson10 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;