import { useCounterContext } from "../../CounterContext";
import { Button } from "../../Components/Button/index";
import { Heading } from "../../Components/Heading";
import "../../styles/styles.css";

export default function App() {
  const [state, action] = useCounterContext();

  const handleError = async () => {
    action
      .asyncError()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e.name + " : " + e.message);
      });
  };

  return (
    <div className="App">
      <Heading />
      <Button handleClick={action.increase}>Increase</Button>
      <Button handleClick={action.decrease}>decrease</Button>
      <Button handleClick={action.reset}>reset</Button>
      <Button
        handleClick={() => {
          action.setCounter({ counter: 10 });
        }}
      >
        counter 10
      </Button>
      <Button
        handleClick={() => {
          action.setCounter({ counter: 100 });
        }}
      >
        counter 100
      </Button>
      <Button disabled={state.loading} handleClick={action.asyncIncrease}>
        asyncIncrease
      </Button>
      <Button disabled={state.loading} handleClick={handleError}>
        asyncError
      </Button>
    </div>
  );
}
