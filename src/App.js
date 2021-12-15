import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "el1",
      title: "Car Insurance",
      amount: 305.89,
      date: new Date(2021, 11, 10),
    },

    {
      id: "el2",
      title: "Crocchette Gatti",
      amount: 12.89,
      date: new Date(2021, 11, 10),
    },

    {
      id: "el3",
      title: "Bread",
      amount: 1.2,
      date: new Date(2021, 11, 10),
    },

    {
      id: "el4",
      title: "Water",
      amount: 1.0,
      date: new Date(2021, 11, 10),
    },
  ];

  // {
  //   let mapped = [];
  //   expenses.map((item, idx) => {
  //     <li>{item.title}</li>;
  //     <li>{item.amount}</li>;
  //     <li>{item.date}</li>;
  //   });
  // }

  return (
    <div>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
