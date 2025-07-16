import { Marquee } from "./magicui/marquee";
import SceneCanvas from "../three/SceneCanvas";
export default function Speakers() {
  const row1Speakers = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
  ];

  const row2Speakers = [
    {
      name: "Alice",
      username: "@alice",
      body: "The experience has been transformative. So grateful for this platform.",
      img: "https://avatar.vercel.sh/alice",
    },
    {
      name: "Bob",
      username: "@bob",
      body: "Truly next level. I didn’t expect to be this impressed.",
      img: "https://avatar.vercel.sh/bob",
    },
    {
      name: "Eva",
      username: "@eva",
      body: "Stunning. Beautifully designed and incredibly smooth.",
      img: "https://avatar.vercel.sh/eva",
    },
  ];

  const SpeakerCard = ({ spk }) => (
    <div className="w-64 backdrop-blur-lg bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center p-6 rounded-xl border border-white/20 shadow-xl shadow-purple-500/10 mx-4">
      <img
        src={spk.img}
        alt={spk.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-orange-300"
      />
      <h4 className="text-xl font-semibold text-orange-300">{spk.name}</h4>
      <p className="text-sm text-gray-400 mb-1">{spk.username}</p>
      <p className="text-sm text-gray-300">{spk.body}</p>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-br text-white py-20 px-4 md:px-20 min-h-screen overflow-hidden">

      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      
      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-300 bg-clip-text text-transparent">
        Meet Our Speakers
      </h2>

      <div className="space-y-12 max-w-7xl mx-auto relative z-10">
        {/* Row 1 */}
        <Marquee pauseOnHover repeat={4}>
          {row1Speakers.map((spk, i) => (
            <SpeakerCard key={`row1-${i}`} spk={spk} />
          ))}
        </Marquee>

        

        {/* Row 2 (reverse) */}
        <Marquee pauseOnHover repeat={4} reverse>
          {row2Speakers.map((spk, i) => (
            <SpeakerCard key={`row2-${i}`} spk={spk} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
