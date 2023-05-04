import Chart from "../Chart/Chart";

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    // The month is zero-based i.e. January is 0, February is 1, etc.
    const expenseMonth = expense.date.getMonth();
    // Since expenseMonth is a number, we can use it as an index to access the value property of the chartDataPoints array.
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
