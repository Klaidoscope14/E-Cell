

const SpeakerCard = ({
  imagePath,
  name,
  title,
  linkedinUrl,
}) => {
  return (
    <div className="relative h-[640px] w-[320px] flex-shrink-0 flex items-center justify-center text-white font-sans">


      {/* Outer Frame */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/home/speakerCard1.png')",
          backgroundSize: "150%",
        }}
      />

      {/* Inner content*/}
      <div className="relative z-10 h-[600px] px-16 pt-32 pb-20 flex flex-col items-center">

        <div className="flex flex-col items-center gap-4">

          <div className="h-[120px] flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full blur-md bg-cyan-400 opacity-40" />
            <img
              src={imagePath}
              alt={name}
              className="relative w-28 h-28 rounded-full border-2 border-cyan-400 object-cover"
            />
          </div>

          <h2
            className="
              h-[48px]
              flex items-center justify-center
              text-xl font-bold uppercase
              tracking-wider text-cyan-400
              text-center
              line-clamp-1
            "
            title={name}
          >
            {name}
          </h2>

          <p
            className="
              h-[72px]
              flex items-center justify-center
              text-sm uppercase
              tracking-widest text-orange-400
              text-center
              line-clamp-1
            "
            title={title}
          >
            {title}
          </p>
        </div>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4
            inline-flex items-center justify-center
            px-4 py-2
            border border-orange-500
            bg-orange-500/10
            text-orange-400
            uppercase text-sm font-bold tracking-wider
            whitespace-nowrap
            hover:bg-orange-500 hover:text-black
            transition-all
          "
        >
          View Profile
        </a>

      </div>
    </div>
  );
};

export default SpeakerCard;
