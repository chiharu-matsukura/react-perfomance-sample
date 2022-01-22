import * as React from "react";

const Child = React.memo<{ count: number; onShowMessage: () => void }>(
  ({ count, onShowMessage }) => {
    React.useEffect(() => {
      onShowMessage();
    }, [onShowMessage]);
    return <p>Child: {count}</p>;
  }
);

const Layout: React.FC<{}> = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  console.log("render App");
  const onShowMessage = React.useCallback(() => {
    console.log("レンダする？");
  }, []);

  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
      <Child count={count2} onShowMessage={onShowMessage} />
    </div>
  );
};

export default Layout;
