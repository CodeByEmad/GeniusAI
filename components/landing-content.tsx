"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Gagan S Kotian",
    avatar: "A",
    title: "CEO",
    description: "I've used many tools but it's game-changer for anyone in the field of AI development!",
  },
  {
    name: "Ishaan P.",
    avatar: "A",
    title: "Developer",
    description: "An incredible tool for accelerating development! It automates so much of the process, giving me more time to focus on creativity!",
  },
  {
    name: "Meera K.",
    avatar: "A",
    title: "Project Manager",
    description: "This AI has made project coordination so much easier. It's efficient, reliable, and has improved team productivity!",
  },
  {
    name: "Vikram J.",
    avatar: "A",
    title: "Freelancer",
    description: "From debugging to code generation, this app does it all. It saves me hours every week and I can’t imagine working without it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg ">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;