import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: 10,
      date: new Date(2022, 1, 6),
    },
    { id: "e2", title: "New TV", price: 500, date: new Date(2022, 1, 6) },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.97,
      date: new Date(2022, 2, 6),
    },
    { id: "e4", title: "New Desk", price: 250, date: new Date(2022, 1, 6) },
  ];
  return (
    <div>
      <h2>Lets Gets Started</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
