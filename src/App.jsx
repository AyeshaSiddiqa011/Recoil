import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count % 2 == 0 ? "its even" : null}</div>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
