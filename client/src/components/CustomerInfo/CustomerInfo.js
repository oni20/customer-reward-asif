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

const CustomerInfoContainer = ({
  customerName = "John Doe",
  rows,
  totalRewardPoints = 180,
}) => {
  return (
    <Grid item xs={6}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          paragraph
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PersonIcon sx={{ pt: 1 }} color="primary" fontSize="large" />
          {customerName}
        </Typography>

        <CustomerTable rows={rows} />

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

  if (error)
    return (
      <Typography variant="h6" align="left" color="text.secondary" paragraph>
        Failed to load the data
      </Typography>
    );
  if (!data) return <Spinner />;

  const formattedCustomerData = formatCustomerTableData(data.RetailData || []);
  if (!formattedCustomerData)
    return (
      <Typography variant="h6" align="left" color="text.secondary" paragraph>
        Error formatting data
      </Typography>
    );

  console.log(formattedCustomerData);

  return (
    <Box sx={{ flexGrow: 1, pt: 6 }}>
      <Grid container spacing={2}>
        {Object.keys(formattedCustomerData).map((customer) => {
          return (
            <CustomerInfoContainer
              key={customer}
              customerName={formattedCustomerData[customer]?.name}
              rows={formattedCustomerData[customer]?.tableData}
              totalRewardPoints={
                formattedCustomerData[customer]?.totalRewardPoints
              }
            />
          );
        })}
      </Grid>
    </Box>
  );
}

export default React.memo(CustomerInfo);
