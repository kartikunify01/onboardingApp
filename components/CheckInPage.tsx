import React, { useState } from "react";
import CheckInTable from "./CheckInTable";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Button, Tabs } from "@mui/material";
import CheckInForm from "./CheckInForm";
import Image from "next/image";
import Link from "next/link";

const CheckInPage = () => {
  const [add, openAdd] = useState<boolean>(true);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between border-b items-center p-2">
        <div className="flex-col flex">
          <h5 className="text-3xl text-start font-bold whitespace-pre-line text-[#5c37eb]">
            Hey Kartik Kumar!
          </h5>
          <p className="text-sm">
            Update your daily check-ins & complete your pending assignments
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col border shadow-md p-2 rounded-lg">
            <p className="text-xs">Manager</p>
            <p className="text-sm">Davda Harshit Deepak</p>
          </div>
          <Link href={'/'}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffffff",
                padding: "0 5",
                height: "50%",
                display: "flex",
                color: "white",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "white",
                  border: "1px solid #5c37eb",
                  color: "#5c37eb",
                },
              }}
              onClick={() => openAdd(!add)}
            >
              <Image
                src={"/images/Home.svg"}
                height={30}
                width={30}
                alt="Home"
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex p-4 gap-4 flex-col">
        <div className="flex justify-start gap-8 items-center">
          <Box>
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
        </div>
        <div className="flex gap-2 items-start">
          <CheckInTable />
          <CheckInForm />
        </div>
      </div>
    </div>
  );
};
export default CheckInPage;
