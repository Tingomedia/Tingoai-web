
const values = [
  {
    title: "Innovation",
    description:
      "At Tingo AI, we harness the power of technology to revolutionize communication, business, and entertainment. By leading Africa's AI-driven transformation, we set new benchmarks in creativity and technological excellence, delivering solutions that inspire and drive progress.",
  },
  {
    title: "Responsibility",
    description:
      "Our commitment to responsibility ensures that all our AI developments are ethical, transparent, and impactful. We strive to create technology that is not only advanced but also conscious of societal and environmental implications, fostering trust and long-term value.",
  },
  {
    title: "Community-Centric Approach",
    description:
      "Rooted in Africa’s unique needs, we design AI solutions that uplift communities and address local challenges. By tailoring our innovations to serve diverse realities, we aim to bridge gaps, drive inclusivity, and make technology truly meaningful for the region.",
  },
  {
    title: "Engagement and Empowerment",
    description:
      "We redefine engagement through AI-powered platforms that create deeper connections between people, businesses, and technology. From transformative customer care to interactive AI radio, we empower individuals and organizations to thrive in a connected future.",
  },
];

const Values = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h1 className="text-center font-Manrope text-[40px] font-medium mb-8">
        Our Core Values
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-[5%] space-y-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="space-y-6 text-center h-[250px] md:h-auto border p-2 lg:p-3 shadow-lg rounded-xl bg-white"
          >
            <h2 className="font-Manrope text-4xl font-medium">
              {value.title}
            </h2>
            <p className="text-fade-gray-label">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
