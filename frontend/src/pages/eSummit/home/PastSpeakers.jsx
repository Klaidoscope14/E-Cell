import styles from "./PastSpeakers.module.css";

const speakers = [
  {
    name: "DR. TANU JAIN",
    photo: "/Speakers/tanujain.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-tanu-jain-4aa28a131/?originalSubdomain=in",
  },
  {
    name: "DR. SANDEEP JAIN",
    photo: "/Speakers/sandeepjain.jpeg",
    linkedin: "https://www.linkedin.com/in/sandeep-jain-/",
  },
  {
    name: "Anubhav Dubey",
    photo: "/Speakers/anubhav.jpeg",
    linkedin: "https://www.linkedin.com/in/anubhavdubey/",
  },
   {
    name: "Suresh Narasimha",
    photo: "/Speakers/Suresh.jpg",
    linkedin: "https://www.linkedin.com/in/cocreator/",
  },
];

export default function PastSpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      {/* HEADER */}
      <div className={styles.sectionHeader}>
        <img src="assets/arrowleft.png" className={styles.arrow} />
        <div className={styles.headerBox}>
          <span className={`${styles.headerText} ${styles.chopsicText}`}>PAST SPEAKERS</span>
        </div>
        <img src="assets/arrowright.png" className={styles.arrow} />
      </div>

      {/* SUBTEXT */}
      <p className={styles.subtitle}>
        Partnering with visionary investors who share our commitment to
        fostering innovation and entrepreneurship
      </p>

      {/* CARDS */}
      <div className={styles.cardsRow}>
        {speakers.map((s, i) => (
          <div className={styles.card} key={i}>
            {/* PHOTO */}
            <img src={s.photo} className={styles.photo} />

            {/* NAME */}
            <div className={styles.name}>{s.name}</div>

            {/* SOCIAL */}
            <div className={styles.socials}>
            <a href={s.linkedin} target="_blank">
             <img src="assets/icons/linkedin.png" />
            </a>
          </div>

          </div>
        ))}
      </div>
    </section>
  );
}
