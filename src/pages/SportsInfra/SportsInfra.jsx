import Header from "../../components/Header/Header";

const sportsInfraListItems = [
  "Astroturf Football Ground",
  "Astroturf Volley Ball Ground",
  "Basket Ball Ground",
  "Astroturf Box Cricket",
  "Skating",
  "Table Tennis",
  "Badminton",
  "Toddler Swimming Pool ( Nursery - UKG )",
  "Beginner's Swimming Pool (Class 1 - 4)",
  "Olympic-Sized Pool (Class 5 - 12)",
  "Taekwondo  Training Centre",
  "Karate Training Centre",
  "Chess Club",
  "Boys Dance Studio",
  "Girls Dance Studio",
];

const sportInfraList = [
  {
    id: "astroturfFootballGround",
    title: "Astroturf Football Ground (25,000 Sq. Ft.)",
    description:
      "Our state-of-the-art, full-sized Astroturf football ground offers an exceptional playing surface for both training and competitive matches. Designed for top performance, it provides a consistent, high-quality experience for players of all levels.",
  },
  {
    title: "Astroturf Volleyball Court",
    description:
      "A professionally designed Astroturf volleyball court, offering the ideal playing environment for both recreational and competitive games, ensuring optimal traction and performance.",
  },
  {
    title: "Astroturf Box Cricket Ground (7,500 Sq. Ft.)",
    description:
      "A dedicated Astroturf box cricket arena, providing a smooth, durable surface for an exciting, fast-paced game of box cricket. Perfect for budding cricketers and enthusiasts alike.",
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
    title: "Olympic-Size Swimming Pool",
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
    title: "Taekwondo Training Centre (Heavy-Duty Floor Mats)",
    description:
      "A specialised training center for Taekwondo, equipped with heavy-duty floor mats to ensure safety and provide a premium training environment for students pursuing martial arts excellence.",
  },
  {
    title: "Karate Training Centre (Heavy-Duty Floor Mats)",
    description:
      "A dedicated space for Karate training, featuring high-performance heavy-duty mats designed to ensure safety during rigorous practice sessions and allow students to master their martial arts skills.",
  },
];

function SportsInfra() {
  return (
    <>
      <Header title="Sports Infra" />
      <section className="m-16">
        <div>
          <p className="text-[#EABE61]">The Green School International</p>
          <h2 className="text-3xl leading-relaxed font-semibold tracking-wide space-y-2 text-primarycolortwo">
            Experience unparalleled infrastructure and facilites at The Green
            School International, where excellence meets innovation.
          </h2>
        </div>

        {/* <!-- Contents Conatiner --> */}
        <div className="m-16">
          <div
            id="sports"
            className="flex items-center justify-between mx-auto max-w-[1300px] gap-48"
          >
            <div className="flex flex-col items-center gap-9">
              <img src="/assets/ThreeS/sports.svg" alt="" />
              <h3 className="font-semibold text-lg">Sports</h3>
            </div>
            <div>
              <img
                src="/assets/ThreeS/sports.jpg"
                alt=""
                className="h-[350px] w-full object-cover object-top"
              />
              <p className="py-8">
                Sports are integral to holistic education, fostering physical
                fitness, teamwork, and discipline. Participation develops
                essential life skills like time management, goal-setting, and
                resilience. Moreover, sports enhance social skills, create a
                sense of belonging, and teach valuable lessons about gracious
                winning and losing. Overall, they instill a lifelong commitment
                to a healthy lifestyle, contributing significantly to a
                well-rounded and balanced education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SportsInfra;
