import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import useSWR from "swr";

// Custom component
import { getFetcher, formatCustomerTableData } from "../../Utility/Utils";
import Spinner from "../Spinner/Spinner";
import CustomerTable from "../CustomerTable/CustomerTable";
import AlertMessage from "../AlertMessage/AlertMessage";
import { FeatureFlag } from "../../Utility/FeatureFlag";

const CustomerInfoContainer = ({
  customerName = "John Doe",
  rows,
  totalRewardPoints = 180,
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          paragraph
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PersonIcon color="primary" fontSize="large" />
          {customerName}
        </Typography>

        <CustomerTable
          rows={rows}
          tableCaption={`${customerName}'s table data with bill amount and reward points`}
        />

        <Chip
          sx={{ mt: 2 }}
          icon={<LoyaltyIcon />}
          label={`Total rewards ${totalRewardPoints}`}
          color="primary"
        />
      </Paper>
    </Grid>
  );
};

function CustomerInfo() {
  const { data, error } = useSWR("/customer", getFetcher);

  // Show error message on UI level if
  if (error) {
    return <AlertMessage severity="error" message="Failed! to load data" />;
  }

  if (!data) return <Spinner />;

  const formattedCustomerData = formatCustomerTableData(data.RetailData || []);
  if (!formattedCustomerData)
    return (
      <AlertMessage
        severity="error"
        message="Failed! to format data. Please check console"
      />
    );

  const { showNoOfLatestRecordForAllCustomer } = FeatureFlag;

  return (
    <Box sx={{ flexGrow: 1, pt: 6 }}>
      <Grid container spacing={2}>
        {Object.keys(formattedCustomerData).map((customer) => {
          const tableRows = formattedCustomerData[customer]?.dataSet.slice(
            0,
            showNoOfLatestRecordForAllCustomer
          );
          const totalRewardPoints = tableRows.reduce(
            (acc, obj) => acc + obj.reward,
            0
          );
          return (
            <CustomerInfoContainer
              key={customer}
              customerName={formattedCustomerData[customer]?.name}
              rows={tableRows}
              totalRewardPoints={totalRewardPoints}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

export default React.memo(CustomerInfo);
