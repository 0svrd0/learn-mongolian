import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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
import Lesson11 from "./pages/lesson/11";
import Lesson12 from "./pages/lesson/12";
import Lesson13 from "./pages/lesson/13";
import Lesson14 from "./pages/lesson/14";
import Lesson15 from "./pages/lesson/15";
import Lesson16 from "./pages/lesson/16";
import Lesson17 from "./pages/lesson/17";
import Lesson18 from "./pages/lesson/18";
import Lesson19 from "./pages/lesson/19";
import Lesson20 from "./pages/lesson/20";
import Lesson1Quiz from "./pages/lesson/1/quiz";
import Lesson2Quiz from "./pages/lesson/2/quiz";
import Lesson3Quiz from "./pages/lesson/3/quiz";
import Lesson4Quiz from "./pages/lesson/4/quiz";
import Lesson5Quiz from "./pages/lesson/5/quiz";
import Lesson6Quiz from "./pages/lesson/6/quiz";
import Lesson7Quiz from "./pages/lesson/7/quiz";
import Lesson8Quiz from "./pages/lesson/8/quiz";
import Lesson9Quiz from "./pages/lesson/9/quiz";
import Lesson10Quiz from "./pages/lesson/10/quiz";
import Lesson11Quiz from "./pages/lesson/11/quiz";
import Lesson12Quiz from "./pages/lesson/12/quiz";
import Lesson13Quiz from "./pages/lesson/13/quiz";
import Lesson14Quiz from "./pages/lesson/14/quiz";
import Lesson15Quiz from "./pages/lesson/15/quiz";
import Lesson16Quiz from "./pages/lesson/16/quiz";
import Lesson17Quiz from "./pages/lesson/17/quiz";
import Lesson18Quiz from "./pages/lesson/18/quiz";
import Lesson19Quiz from "./pages/lesson/19/quiz";
import Lesson20Quiz from "./pages/lesson/20/quiz";

function App() {
  return (
    <Router>
      <Layout>
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
        <Route path="/lesson/1/quiz" element={<Lesson1Quiz />} />
        <Route path="/lesson/2/quiz" element={<Lesson2Quiz />} />
        <Route path="/lesson/3/quiz" element={<Lesson3Quiz />} />
        <Route path="/lesson/4/quiz" element={<Lesson4Quiz />} />
        <Route path="/lesson/5/quiz" element={<Lesson5Quiz />} />
        <Route path="/lesson/6/quiz" element={<Lesson6Quiz />} />
        <Route path="/lesson/7/quiz" element={<Lesson7Quiz />} />
        <Route path="/lesson/8/quiz" element={<Lesson8Quiz />} />
        <Route path="/lesson/9/quiz" element={<Lesson9Quiz />} />
        <Route path="/lesson/10/quiz" element={<Lesson10Quiz />} />
        <Route path="/lesson/11/quiz" element={<Lesson11Quiz />} />
        <Route path="/lesson/12/quiz" element={<Lesson12Quiz />} />
        <Route path="/lesson/13/quiz" element={<Lesson13Quiz />} />
        <Route path="/lesson/14/quiz" element={<Lesson14Quiz />} />
        <Route path="/lesson/15/quiz" element={<Lesson15Quiz />} />
        <Route path="/lesson/16/quiz" element={<Lesson16Quiz />} />
        <Route path="/lesson/17/quiz" element={<Lesson17Quiz />} />
        <Route path="/lesson/18/quiz" element={<Lesson18Quiz />} />
        <Route path="/lesson/19/quiz" element={<Lesson19Quiz />} />
        <Route path="/lesson/20/quiz" element={<Lesson20Quiz />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
