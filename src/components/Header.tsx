export const Header = () => {
  return (
    <header className="pt-6 pb-12">
      <h1 className="text-5xl text-white font-semibold pb-4">Run Timer</h1>
      <p className="text-gray-400 text-lg">
        <span className="text-white">60</span>s warmup, then{" "}
        <span className="text-white">6</span> sets of{" "}
        <span className="text-white">30</span>s workout and{" "}
        <span className="text-white">30</span>s rest, then{" "}
        <span className="text-white">60</span>s cooldown.
      </p>
    </header>
  );
};
