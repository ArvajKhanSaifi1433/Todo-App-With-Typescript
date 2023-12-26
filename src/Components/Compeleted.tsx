import { useOutletContext } from "react-router-dom";
import MainSection from "./MainSection";
interface TD {
  todo: string;
  id: string;
  isComplete: boolean;
  isUpadate: boolean;
}
function Compeleted() {
  const arr: TD[] = useOutletContext();

  return (
    <div className="multiple">
      {arr
        .filter((item) => item.isComplete === false)
        .map((item) => {
          return <MainSection key={crypto.randomUUID()} item={item} />;
        })}
    </div>
  );
}

export default Compeleted;
