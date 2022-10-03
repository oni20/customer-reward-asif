import axios from "axios";

export const getFetcher = (url) => axios.get(url).then((res) => res.data);

const calculateCustomerPoint = (amount) => {
  let points = 0;
  const over100Dollar = amount - 100;
  const over50Dollar = amount - 50;

  if (over100Dollar > 0) {
    // A customer receives 2 points for every dollar spent over $100 in each transaction
    points += over100Dollar * 2;
  }

  if (over50Dollar > 0) {
    const over50DollarCheck = over50Dollar > 50 ? 50 : over50Dollar;
    // plus 1 point for every dollar spent over $50 in each transaction
    points += over50DollarCheck * 1;
  }

  return points;
};

const getMonthsLabel = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const sortCustomerArrByDate = (arr) => {
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const formatCustomerTableData = (customerData = []) => {
  if (customerData.length === 0) return null;

  let customerFormattedData = {};
  const sortedCustomerData = sortCustomerArrByDate(customerData);

  sortedCustomerData.forEach((customer, index) => {
    const { firstName, lastName, customerID, billAmount, date } = customer;
    const name = `${firstName} ${lastName}`;
    const rewardPoint = calculateCustomerPoint(billAmount);
    const customerDate = new Date(date);
    const monthLabel = getMonthsLabel[customerDate.getMonth()];
    const year = customerDate.getFullYear();
    const dateKey = `${monthLabel}${year}`;

    if (!customerFormattedData.hasOwnProperty(customerID)) {
      customerFormattedData[customerID] = {
        name,
        dataSet: [],
      };
    }

    const existinDateIDIndex = customerFormattedData[
      customerID
    ].dataSet.findIndex((customer) => customer.dateID === dateKey);

    if (existinDateIDIndex < 0) {
      customerFormattedData[customerID].dataSet.push({
        dateID: dateKey,
        date: `${monthLabel}, ${year}`,
        bill: 0,
        reward: 0,
      });
    }

    const newIndex = customerFormattedData[customerID].dataSet.length - 1;

    customerFormattedData[customerID].dataSet[newIndex].bill += billAmount;
    customerFormattedData[customerID].dataSet[newIndex].reward += rewardPoint;
  });

  return customerFormattedData;
};
