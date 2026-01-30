"use client";

import { Box, Paper, TextField, Typography } from "@mui/material";
import Form, { IChangeEvent } from "@rjsf/core";
import { FieldTemplateProps, RJSFSchema, WidgetProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import {toast} from 'react-toastify'

const schema: RJSFSchema = {
  type: "object",
  required: ["firstName"],
  properties: {
    firstName: { type: "string", title: "First Name" },
    lastName: { type: "string", title: "Last Name" },
  },
};
interface UserProfile {
  firstName: string;
  lastName: string;
  managerFirstName: string;
  managerLastName: string;
}
const CustomTextWidget = (props: WidgetProps) => {
  const { value, onChange, label, required, rawErrors, schema } = props;

  return (
    <TextField
      fullWidth
      label={label}
      required={required}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      helperText={rawErrors?.[0] || schema.description}
      error={Boolean(rawErrors?.length)}
      variant="standard"
      margin="normal"
    />
  );
};

const widgets = {
  TextWidget: CustomTextWidget,
};
function CustomFieldTemplate(props: FieldTemplateProps) {
  const { classNames, style, help, description, errors, children } = props;
  return (
    <div className={classNames} style={style}>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
}
const templates = {
  FieldTemplate: CustomFieldTemplate,
};
const page = () => {
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: async (formData:UserProfile)=>{
      const response = await axios.post('/api/login',formData);
      return response.data;
    },

    onSuccess:(data)=>{
      localStorage.setItem("token",JSON.stringify(data.data[0]));
      console.log("Welcome ",data.data[0].employee_name);
      toast.success(`Welcome ${data.data[0].employee_name}`);
      router.push("/");
    },
    onError: (error) => {
      console.log("Login error:", error);
      toast.error("Invalid User");
    },
  })
  const handleSubmit = async (data:IChangeEvent<UserProfile,RJSFSchema>) => {
    if(!data.formData) return;
    return loginMutation.mutate(data.formData);
  };

  return (
    <div className="flex bg-gradient-to-r from-[#a896eb] to-[#27126F] h-full">
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            paddingBottom: 4,
          }}
        >
          Employee Onboarding Login
        </Typography>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, gap: 4, boxShadow:".75rem .75rem #86708bff",borderRadius:".75rem"}}>
          <Form
            schema={schema}
            validator={validator as any}
            onSubmit={handleSubmit}
            widgets={widgets}
            templates={templates}
          >
            <button
              type="submit"
              style={{
                margin: 8,
                cursor: "pointer",
                padding: 8,
                backgroundColor: "#5c37eb",
                color: "white",
                width:"100%",
                borderRadius: "1rem",
                marginTop:"2rem"
              }}
            >
              Login
            </button>
          </Form>
        </Paper>
      </Box>
    </div>
  );
};

export default page;
