import styles from "./Testimonials.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/images/Img1.png",
      name: "James Carter",
      stars: 5,
      text: "Excellent care and an amazing experience from start to finish. The team made me feel valued every step of the way.",
    },
    {
      image: "/images/Img2.jpg",
      name: "Sophie Moore",
      stars: 5,
      text: "Professional staff and a very smooth appointment process. I always leave feeling confident in my care.",
    },
    {
      image: "/images/Img3.jpg",
      name: "Daniel Brooks",
      stars: 5,
      text: "Clean facilities and outstanding patient support. Havenwell sets the standard for modern healthcare.",
    },
    {
      image: "/images/Img4.png",
      name: "Olivia White",
      stars: 5,
      text: "Everyone was kind and made me feel completely comfortable. I recommend Havenwell to all my family.",
    },
    {
      image: "/images/Img5.png",
      name: "Michael Scott",
      stars: 5,
      text: "Fast scheduling and excellent communication throughout. The entire experience exceeded my expectations.",
    },
    {
      image: "/images/Img6.png",
      name: "Emma Wilson",
      stars: 5,
      text: "Highly recommend Havenwell Health to anyone looking for trustworthy, compassionate medical care.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(testimonials.length / perPage);

  function prev() {
    setCurrent((c) => (c - 1 + pages) % pages);
  }

  function next() {
    setCurrent((c) => (c + 1) % pages);
  }

  const visible3 = testimonials.slice(
    current * perPage,
    current * perPage + perPage,
  );

  return (
    <section className={styles.section}>
      <div className={styles.quoteIcon}>&ldquo;</div>

      <h2 className={styles.title}>Voices From Our Community</h2>
      <p className={styles.subtitle}>
        Real experiences from the patients and families who trust us with their
        care
      </p>

      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowBtn}
          onClick={prev}
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div className={styles.cardsRow}>
          {visible3.map((item, i) => (
            <div
              className={`${styles.card} ${i === 1 ? styles.cardCenter : ""}`}
              key={i}
            >
              <span className={styles.cardQuote}>&rdquo;</span>
              <img
                src={item.image}
                alt={item.name}
                className={styles.avatar}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
              <h3 className={styles.name}>{item.name}</h3>
              <div className={styles.stars}>{"★".repeat(item.stars)}</div>
              <p className={styles.text}>&ldquo;{item.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <button className={styles.arrowBtn} onClick={next} aria-label="Next">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.dots}>
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
