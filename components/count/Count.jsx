import CounterCard from "../cards/CounterCard";

const Count = () => (
  <section className="mx-4">
    <div className="container mt-[60px] lg:mt-[120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {[
        { id: 1, num: 3836, title: "Total Items" },
        { id: 2, num: 0, title: "Total Owners" },
        { id: 3, num: 0.15, title: "Mint Price (SOL)" },
      ].map((item) => (
        <CounterCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default Count;
