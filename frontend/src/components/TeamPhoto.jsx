import SceneCanvas from "../three/SceneCanvas";
import Lens from "./magicui/lens";

export default function TeamPhoto() {
  return (
    <section
      id="team"
      className="relative bg-[#0f172a] min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-20 py-12 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>

      {/* Gradient Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 z-10 bg-gradient-to-r from-orange-400 via-white-300 to-blue-400 bg-clip-text text-transparent">
        Meet The Team
      </h2>

      <div className="z-10 w-full max-w-6xl rounded-3xl overflow-hidden border-4 border-orange-400/30 shadow-2xl shadow-purple-500/20">
        <Lens zoomFactor={1.4} lensSize={180} lensColor="#000000">
          <img
            src="/teamphoto.jpg" // 👈 Replace with your image path
            alt="Team"
            className="w-full h-[60vh] object-cover object-center rounded-2xl"
          />
        </Lens>
      </div>

      {/* Optional caption */}
      <p className="z-10 mt-6 text-center text-sm text-gray-300">
        The dream team behind the vision ✨
      </p>
    </section>
  );
}
