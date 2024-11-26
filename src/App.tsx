import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Index from "@/pages/Index";
import Learn from "@/pages/Learn";
import Games from "@/pages/Games";
import Story from "@/pages/Story";
import Lesson1 from "@/pages/lesson/1";
import Lesson2 from "@/pages/lesson/2";
import Lesson3 from "@/pages/lesson/3";
import Lesson4 from "@/pages/lesson/4";
import Lesson5 from "@/pages/lesson/5";
import Lesson6 from "@/pages/lesson/6";
import Lesson7 from "@/pages/lesson/7";
import Lesson8 from "@/pages/lesson/8";
import Lesson9 from "@/pages/lesson/9";
import Lesson10 from "@/pages/lesson/10";
import Lesson11 from "@/pages/lesson/11";
import Lesson12 from "@/pages/lesson/12";
import Lesson13 from "@/pages/lesson/13";
import Lesson14 from "@/pages/lesson/14";
import Lesson15 from "@/pages/lesson/15";
import Lesson16 from "@/pages/lesson/16";
import Lesson17 from "@/pages/lesson/17";
import Lesson18 from "@/pages/lesson/18";
import Lesson19 from "@/pages/lesson/19";
import Lesson20 from "@/pages/lesson/20";
import Story1 from "@/pages/stories/Story1";
import Story2 from "@/pages/stories/Story2";
import Story3 from "@/pages/stories/Story3";
import Story4 from "@/pages/stories/Story4";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto">{children}</div>;
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-[#2a64ac]">
            <Header />
            <PageWrapper>
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
                <Route path="/lesson/11" element={<Lesson11 />} />
                <Route path="/lesson/12" element={<Lesson12 />} />
                <Route path="/lesson/13" element={<Lesson13 />} />
                <Route path="/lesson/14" element={<Lesson14 />} />
                <Route path="/lesson/15" element={<Lesson15 />} />
                <Route path="/lesson/16" element={<Lesson16 />} />
                <Route path="/lesson/17" element={<Lesson17 />} />
                <Route path="/lesson/18" element={<Lesson18 />} />
                <Route path="/lesson/19" element={<Lesson19 />} />
                <Route path="/lesson/20" element={<Lesson20 />} />
              </Routes>
            </PageWrapper>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;