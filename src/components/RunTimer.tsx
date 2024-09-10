import { Blocks } from "./Blocks";
import { Header } from "./Header";
import { Timer } from "./Timer";

export const RunTimer = () => {
  return (
    <div className="max-w-lg mx-auto p-6">
      <Header />
      <Blocks />
      <div className="flex justify-center items-center flex-col">
        <Timer />
      </div>
    </div>
  );
};
