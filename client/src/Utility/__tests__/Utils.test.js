import { sortCustomerArrByDate, formatCustomerTableData } from "../Utils";

test("Should Sort array by date in descending order", () => {
  const inputArr = [
    {
      date: "12/2/2019",
    },
    {
      date: "03/2/2021",
    },
  ];
  const expectedResult = [
    {
      date: "03/2/2021",
    },
    {
      date: "12/2/2019",
    },
  ];

  const result = sortCustomerArrByDate(inputArr);
  expect(result).toEqual(expectedResult);
});

test("Should Format Customer data", () => {
  const retailData = [
    {
      firstName: "John",
      lastName: "Doe",
      customerID: 1,
      billAmount: 50,
      date: "07/1/2020",
    },
    {
      firstName: "John",
      lastName: "Doe",
      customerID: 1,
      billAmount: 30,
      date: "06/1/2021",
    },
    {
      firstName: "Micheal",
      lastName: "Taylor",
      customerID: 2,
      billAmount: 120,
      date: "05/15/2001",
    },
    {
      firstName: "Micheal",
      lastName: "Taylor",
      customerID: 2,
      billAmount: 50,
      date: "04/16/2000",
    },
  ];
  const expectedResult = {
    1: {
      dataSet: [
        { bill: 30, date: "June, 2021", dateID: "June2021", reward: 0 },
        { bill: 50, date: "July, 2020", dateID: "July2020", reward: 0 },
      ],
      name: "John Doe",
    },
    2: {
      dataSet: [
        { bill: 120, date: "May, 2001", dateID: "May2001", reward: 90 },
        { bill: 50, date: "April, 2000", dateID: "April2000", reward: 0 },
      ],
      name: "Micheal Taylor",
    },
  };

  const formattedCustomerData = formatCustomerTableData(retailData);
  expect(formattedCustomerData).toEqual(expectedResult);
});
