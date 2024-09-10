export const Blocks = () => {

  return (
    <div className="flex items-center gap-1 mb-8">
      {["warmup", ...Array(6).fill(["workout", "rest"]).flat(), "cooldown"].map(
        (p, i) => (
          <div
            key={i}
            className={`h-6 w-10 rounded ${
              p === "warmup" || p === "cooldown"
                ? "bg-yellow-500"
                : p === "workout"
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
          />
        )
      )}
    </div>
  );
};
