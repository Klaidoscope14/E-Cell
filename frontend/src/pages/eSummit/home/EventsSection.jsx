import { useRef } from "react";
import styles from "./Event.module.css";

export default function EventsSection() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("img");
    if (!card) return;

    const cardWidth = card.offsetWidth + 32; // card width + gap
    track.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.eventsSection}>
      {/* HEADER */}
      <div className={styles.sectionHeader}>
        <img
          src="assets/arrowleft.png"
          className={styles.arrowImageleft}
          onClick={() => scrollByCard(-1)}
          alt="prev"
        />

        <div className={styles.headerBox}>
          <span className={`${styles.headerText} ${styles.chopsicText}`}>EVENTS</span>
        </div>

        <img
          src="assets/arrowright.png"
          className={styles.arrowImageright}
          onClick={() => scrollByCard(1)}
          alt="next"
        />
      </div>

      {/* CAROUSEL */}
      <div ref={trackRef} className={styles.eventCards}>
        <img src="assets/event1.png" className={styles.eventImage} />
        <img src="assets/event2.png" className={styles.eventImage} />
        <img src="assets/event6.png" className={styles.eventImage} />
        <img src="assets/event4.png" className={styles.eventImage} />
        <img src="assets/event5.png" className={styles.eventImage} />
         <img src="assets/event3.png" className={styles.eventImage} />
      </div>
    </section>
  );
}
