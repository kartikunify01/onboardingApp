'use client'
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Button, Tabs } from "@mui/material";
import CheckInPage from "@/components/CheckInPage";

const CheckIn = () => {
    const [add,openAdd] = useState<Boolean>(true);
    return (
        add ? 
        <div className="">
            <CheckInPage />    
        </div> : <CheckInPage />
    )
}
export default CheckIn;
