import { LESSON13_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson13Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON13_WORDS} lessonNumber={13} />
    </div>
  );
};

export default Lesson13Quiz;