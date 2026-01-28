import React from "react";
import CheckInTable from "./CheckInTable";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Button, Tabs } from "@mui/material";

const CheckInPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between border-b items-center p-2">
        <div className="flex-col flex">
          <h5 className="text-3xl text-start font-bold whitespace-pre-line text-[#5c37eb]">Hey Kartik Kumar!</h5>
          <p className="text-sm">Update your daily check-ins & complete your pending assignments</p>
        </div>
        <div className="flex flex-col border shadow-md p-2 rounded-lg">
          <p className="text-xs">Manager</p>
          <p className="text-sm">Davda Harshit Deepak</p>
        </div>
      </div>
      <div className="flex p-4 gap-4 flex-col">
        <div className="flex justify-start gap-8 items-center">
          <Box
          >
            <Tabs
              value={0}
              sx={{
                "& .MuiTab-root": {
                  color: "gray",
                  fontWeight: "bold",
                },
                "& .Mui-selected": {
                  color: "#5C37EB",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#5C37EB",
                  height: "4px",
                },
              }}
            >
              <Tab label="Check In" />
            </Tabs>
          </Box>
          <Button variant="contained"
              sx={{
                backgroundColor: "#5c37eb",
                padding:"0 5",
                height:"50%",
                display:"flex",
                justifyContent:"center",
                "&:hover": {
                  backgroundColor: "#e64a19",
                },
              }}
          >
            <span className="text-xs font-bold">+ Add Check In</span>
          </Button>
        </div>
        <CheckInTable />
      </div>
    </div>
  );
}
export default CheckInPage;
