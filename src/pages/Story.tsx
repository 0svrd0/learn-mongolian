import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const STORIES = [
  {
    id: 1,
    title: "Naraa and Her Morning",
    mongolianTitle: "Нараа ба түүний өглөө",
    mongolianText: "Сайн уу! Энэ бол Нараа. Тэр өглөөний долоо цагт босдог. Нараа эхлээд ус уудаг. Дараа нь тэр талх иддэг. Нараа цай эсвэл кофе уух дуртай. Өнөөдөр тэр цай уусан. Нараа цагаа хараад, ажилдаа явдаг. Тэр автобусаар явдаг. Өглөөний тэнгэр цэнхэр, нар хурц байна. Гудамжинд мод, цэцэг ногоон байна. Нараа байгальд дуртай.",
    translation: "Hello! This is Naraa. She wakes up at 7 in the morning. Naraa drinks water first. Then she eats bread. Naraa likes drinking tea or coffee. Today, she drank tea. Naraa checks the time and goes to work. She takes the bus. The morning sky is blue, and the sun is bright. On the street, the trees and flowers are green. Naraa loves nature.",
    image: "/lovable-uploads/15332487-3ec4-4499-96e6-f8765e4488dd.png"
  },
  {
    id: 2,
    title: "Colors and Nature",
    mongolianTitle: "Өнгө ба байгаль",
    mongolianText: "Нараа модны доор сууж ном уншдаг. Тэр ойд байдаг. Мод ногоон, цэцэг улаан, шар, цагаан өнгөтэй байна. Нар хурц, тэнгэр цэнхэр.",
    translation: "Naraa is sitting under a tree and reading a book. She is in the forest. The trees are green, and the flowers are red, yellow, and white. The sun is bright, and the sky is blue.",
    image: "/lovable-uploads/f69a6d65-67c5-4291-9694-485819742cf8.png"
  },
  {
    id: 3,
    title: "At the Market",
    mongolianTitle: "Зах дээр",
    mongolianText: "Баяраа зах дээр явдаг. Тэр мах, талх, ногоо авдаг. Хонь мах үнэтэй байна. Харин ногоо хямд байна. Баяраа арван мянган төгрөг төлсөн.",
    translation: "Bayaraa went to the market. He bought meat, bread, and vegetables. The mutton was expensive. But the vegetables were cheap. Bayaraa paid 10,000 tugriks.",
    image: "/lovable-uploads/3a2e9e1b-918e-4e21-a7ff-383ae1c3d6ce.png"
  },
  {
    id: 4,
    title: "A Day at School",
    mongolianTitle: "Сургууль дээрх өдөр",
    mongolianText: "Дэлгэр найман цагт сургуульдаа явдаг. Өглөө багш: 'Сайн байна уу?' гэж хэлдэг. Хүүхдүүд: 'Сайн байна уу!' гэж хариулдаг.",
    translation: "Delger goes to school at 8 o'clock. In the morning, the teacher says: 'Hello!'. The children reply: 'Hello!'.",
    image: "/lovable-uploads/bcd7bf4b-60d3-4509-9a7f-7991327eecf0.png"
  }
];

const Story = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#87CEEB]/10 p-8">
      <div className="container mx-auto">
        <Button 
          onClick={() => navigate("/")}
          className="mb-8 bg-[#8FBC8F] hover:bg-[#8FBC8F]/80 text-white"
        >
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STORIES.map((story) => (
            <Card 
              key={story.id}
              className="p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-2">
                {story.title}
              </h2>
              <h3 className="text-xl font-medium text-[#2F4F4F] mb-4">
                {story.mongolianTitle}
              </h3>
              {selectedStory === story.id ? (
                <div className="space-y-4">
                  <p className="text-[#2F4F4F] mb-4 font-mongolian">
                    {story.mongolianText}
                  </p>
                  <p className="text-[#2F4F4F] italic">
                    {story.translation}
                  </p>
                  <Button
                    onClick={() => setSelectedStory(null)}
                    className="w-full bg-[#D2691E] hover:bg-[#D2691E]/80 text-white"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setSelectedStory(story.id)}
                  className="w-full bg-[#FFD700] hover:bg-[#FFD700]/80 text-[#2F4F4F]"
                >
                  Read Story
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;