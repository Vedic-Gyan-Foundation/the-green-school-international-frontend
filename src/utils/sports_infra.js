import { title } from "framer-motion/client";

class SportsInfraUtil {
  static sportInfraList = [
    {
      title: "Astroturf Football Ground",
      description:
        "Our state-of-the-art, full-sized Astroturf football ground  (25,000 Sq. Ft.) offers an exceptional playing surface for both training and competitive matches. Designed for top performance, it provides a consistent, high-quality experience for players of all levels.",
    },
    {
      title: "Astroturf Volleyball Court",
      description:
        "A professionally designed Astroturf volleyball court, offering the ideal playing environment for both recreational and competitive games, ensuring optimal traction and performance.",
    },
    {
      title: "Astroturf Box Cricket Ground",
      description:
        "A dedicated Astroturf box cricket arena (7,500 Sq. Ft.), providing a smooth, durable surface for an exciting, fast-paced game of box cricket. Perfect for budding cricketers and enthusiasts alike.",
    },
    {
      title: "Basketball Court",
      description:
        "A full-sized basketball court designed to meet professional standards, ensuring an excellent playing surface for students to hone their skills, engage in friendly games, or participate in tournaments.",
    },
    {
      title: "Toddler Swimming Pool",
      description:
        "A shallow and safe swimming pool designed specifically for toddlers, offering a secure environment for young learners to begin their water journey with confidence.",
    },
    {
      title: "Beginners Swimming Pool",
      description:
        "Tailored for novice swimmers, this pool features a gradual depth and a calm environment, allowing students to comfortably learn and improve their swimming techniques.",
    },
    {
      title: "Half-Olympic-Size Swimming Pool",
      description:
        "Best in class, 25-meter Half Olympic-size swimming pool designed for advanced swimmers, competitions, and professional training. This facility meets international standards and is perfect for serious aquatic athletes.",
    },
    {
      title: "Yoga Studio",
      description:
        "A serene, dedicated space for yoga practice, providing a tranquil atmosphere for students to improve flexibility, strength, and mindfulness under expert guidance.",
    },
    {
      title: "Dance Studios with Soft Flooring and Acoustic Facilities",
      description:
        "Our professionally designed dance floors feature soft, cushioned flooring to support a range of dance forms. Coupled with advanced acoustic systems, the studio provides the perfect environment for both performances and rehearsals.",
    },
    {
      title: "Skating Rink",
      description:
        "A well-maintained skating Zone, ideal for students to enjoy recreational skating or train for competitive events, enhancing balance, coordination, and endurance.",
    },
    {
      title: "Badminton Court with Rubber Flooring",
      description:
        "A high-quality badminton court with specially designed rubber flooring that offers a comfortable and dynamic surface for fast-paced, competitive games.",
    },
    {
      title: "Taekwondo Training Centre",
      description:
        "A specialised training center for Taekwondo, equipped with heavy-duty floor mats to ensure safety and provide a premium training environment for students pursuing martial arts excellence.",
    },
    {
      title: "Karate Training Centre",
      description:
        "A dedicated space for Karate training, featuring high-performance heavy-duty mats designed to ensure safety during rigorous practice sessions and allow students to master their martial arts skills.",
    },
    {
      title: "Chess Room",
      description:
        "A tranquil and thoughtfully designed Chess Room tailored for strategic learning and competitive play. This space features custom-built chess tables and comfortable seating arrangements to foster concentration and critical thinking. Equipped with ample lighting and a serene ambiance, it offers the perfect environment for players of all levels to engage in practice, tournaments, or casual games.",
    },
    {
      title: "Table Tennis Arena",
      description:
        "A modern Table Tennis facility designed to meet professional standards, featuring high-quality tables, anti-glare lighting, and a spacious layout for seamless gameplay. This arena provides an ideal environment for both recreational and competitive matches, encouraging students to enhance their agility, precision, and reflexes while enjoying the fast-paced sport.",
    },
  ];

  // Generates an ID dynamically from the title
  static generateId(title) {
    return title
      .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
      .trim()
      .split(/\s+/) // Handle multiple spaces
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  }

  // `this` here referes to the class itself because `getProcessedList` is a static method and inside static methdos this points to `class` itself
  static getProcessedList() {
    return this.sportInfraList.map((item) => {
      const formattedTitle = item.title.replace(/\s+/g, "_");

      return {
        id: this.generateId(item.title),
        title: item.title,
        description: item.description,
        titleLogo: `/assets/SportsInfra/svg/${formattedTitle}.svg`,
        descriptionImg: `/assets/SportsInfra/jpg/${formattedTitle}.JPG`,
      };
    });
  }
}

export { SportsInfraUtil };
