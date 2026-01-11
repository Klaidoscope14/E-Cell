import SpeakerCard from "./SpeakerCard";
import styles from "./Speakers.module.css";

const speakers = [
  {
    name: "Dr. Buddha Chandrasekhar",
    image: "/Speakers/budha.png",
    linkedin: "https://www.linkedin.com/in/chandrasekharbudha/",
    title: "Chief Coordinating Officer, AICTE, Ministry of Education, GOI",
  },
  {
    name: "Varun Varunesh",
    image: "/Speakers/varun.jpeg",
    linkedin: "https://www.linkedin.com/in/varunvarunesh/",
    title: "CTO, Medkart",
  },
  {
    name: "Dr. Satyajit Singh",
    image: "/Speakers/satyajit.png",
    linkedin: "https://www.linkedin.com/in/satyajit-singh-619645321/",
    title: "Director & MD, Ruban Group of Hospitals",
  },
  {
    name: "Dr. Mausumi Saha",
    image: "/Speakers/saha.png",
    linkedin: "https://www.linkedin.com/in/dr-mousumi-saha-33556948/",
    title: "CEO, AIIMS Patna Incubation and Innovation Council",
  },
  {
    name: "Haren Chelle",
    image: "/Speakers/haren.jpg",
    linkedin: "https://www.linkedin.com/in/harenchelle/",
    title: "Co-Founder & CEO, Pulse",
  },
  {
    name: "chirag Wadhera",
    image: "/Speakers/chirag.jpg",
    linkedin: "https://www.linkedin.com/in/chiragw15/",
    title: "Co-Founder & CTO, Revspot",
  },
  {
    name: "dr. sriparna saha",
    image: "/Speakers/sriparna.png",
    linkedin: "https://www.linkedin.com/in/sriparna-saha-1a1338161/",
    title: "Professor and Researcher, IIT Patna",
  },
  {
    name: "dr. kamlesh jha",
    image: "/Speakers/kamlesh.png",
    linkedin: "https://www.linkedin.com/in/kamlesh-jha-19576628?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Professor and Researcher, AIIMS Patna",
  },
  {
    name: "suman jha",
    image: "/Speakers/suman.png",
    linkedin: "https://www.linkedin.com/in/thesumanjha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Founder, Jilo Health",
  },
  {
    name: "bhanu pratap",
    image: "/Speakers/bhanu.jpg",
    linkedin: "https://www.linkedin.com/in/bhanu-pratap-b2a334a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Co-Founder & CEO, Mediversal Healthcare",
  },
   {
    name: "dr. kadiyali srivatsa",
    image: "/Speakers/srivatsa.png",
    linkedin: "https://www.linkedin.com/in/medifix/",
    title: "Trustee, Dr Maya Foundation",
  },
  {
    name: "dr. sambit kumar dash",
    image: "/Speakers/sambit.png",
    linkedin: "https://share.google/O8YgkW0NUyP4Qai8E",
    title: "CEO, Ruban Group of Hospitals",
  },
  {
    name: "dr. Ashish kumar",
    image: "/Speakers/ashish.jpg",
    linkedin: "https://www.linkedin.com/in/dr-ashish-kumar-60031a15?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Professor & Scientist, ICMR-RMRIMS",
  },
  {
    name: "dr. nidhi prasad",
    image: "/Speakers/nidhi.jpeg",
    linkedin: "https://www.linkedin.com/in/nidhi-prasad-514156137?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Professor, IGIMS",
  },
  {
    name: "siddhartha shankar",
    image: "/Speakers/siddharth.png",
    linkedin: "https://www.linkedin.com/in/sidshankar1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Co-founder & CEO, Humantics AI",
  },
  {
    name: "Amit kumar",
    image: "/Speakers/amit.png",
    linkedin: "https://www.linkedin.com/in/amit-kumardropty?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Founder & Investor , Dropty",
  },
];


export default function SpeakersSection() {
  return (
    <section className={styles.speakersSection}>

      {/* ===== HEADER ===== */}
      <div className={styles.sectionHeader}>
        <img src="/assets/arrowleft.png" alt="" className={styles.arrow} />

        <div className={styles.headerBox}>
          <span className={`${styles.headerText} ${styles.chopsicText}`}>SPEAKERS</span>
        </div>

        <img src="/assets/arrowright.png" alt="" className={styles.arrow} />
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
