import { LESSON15_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson15Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON15_WORDS} lessonNumber={15} />
    </div>
  );
};

export default Lesson15Quiz;