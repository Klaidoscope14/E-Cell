import SpeakerCard from "./SpeakerCard";
import styles from "./Speakers.module.css";

const speakers = [
  {
    name: "Dr. Buddha Chandrasekhar",
    image: "/home/speakers/tanu.png",
    linkedin: "https://linkedin.com/in/bhanu",
    title: "Title",
  },
  {
    name: "Varun Varunesh",
    image: "/home/speakers/tanu.png",
    linkedin: "https://linkedin.com/in/chirag",
    title: "Title",
  },
  {
    name: "Satyajit",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "Mausumi",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "haren",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "chirag",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "sriparna",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "kamlesh",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "suman",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "kadiyali",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "bhanu",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "sambit",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "Ashish",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "Title",
  },
  {
    name: "nidhi",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "MENTOR",
  },
  {
    name: "siddhartha",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "title",
  },
  {
    name: "Amit",
    image: "/home/speakers/tanu.png",
    linkedin: "Title",
    title: "",
  },
];


export default function SpeakersSection() {
  return (
    <section className={styles.speakersSection}>

      {/* ===== HEADER ===== */}
      <div className={styles.sectionHeader}>
        <img src="/images/arrowleft.png" alt="" className={styles.arrow} />

        <div className={styles.headerBox}>
          <span className={`${styles.headerText} ${styles.chopsicText}`}>SPEAKERS</span>
        </div>

        <img src="/images/arrowright.png" alt="" className={styles.arrow} />
      </div>

      <div className={styles.cardsRow}>
        {speakers.map((speaker) => (
          <SpeakerCard
            imagePath={speaker.image}
            name={speaker.name}
            title={speaker.title}
            linkedinUrl={speaker.linkedin}
          />
        ))}
        {/* {speakers.map((speaker) => (
    <div key={speaker.name} className={styles.cardWrap}>
      
      <img
        src={speaker.image}
        alt={speaker.name}
        className={styles.cardImage}
      />

      <div className={styles.socials}>
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${speaker.name} LinkedIn`}
        />
        <a
          href={speaker.title}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${speaker.name} title`}
        />
      </div>

    </div>
  ))} */}
      </div>


    </section>
  );
}
