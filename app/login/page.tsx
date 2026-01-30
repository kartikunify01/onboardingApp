"use client";

import { Box, Paper, TextField, Typography } from "@mui/material";
import Form, { IChangeEvent } from "@rjsf/core";
import { FieldTemplateProps, RJSFSchema, WidgetProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";

const schema: RJSFSchema = {
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: { type: "string", title: "First Name" },
    lastName: { type: "string", title: "Last Name" },
  },
};
const uiSchema = {
  "ui:options": {
    label: false,
  },
  "ui:title": "Your password",
  //   firstName: {
  //     "ui:autofocus": true,
  //     "ui:placeholder": "Enter your first name",
  //   },
  //   lastName: {
  //     "ui:placeholder": "Enter your last name",
  //   },
  //   managerFirstName: {
  //     "ui:placeholder": "Enter your first name",
  //   },
  //   managerLastName: {
  //     "ui:placeholder": "Enter your last name",
  //   },
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
  const [formData, setFormData] = useState<UserProfile | null | undefined>(
    null,
  );

  const handleSubmit = async (data:IChangeEvent<UserProfile,RJSFSchema>) => {
    setFormData(data.formData);
    const formData = data.formData;
    if(!formData) return;

    const response = await axios.post('/api/login',formData)
    if(response.data.success){
      console.log("response: ",response.data.data[0]);
      redirect('/')
    }
    else{
      console.error("error occ: ",response.data)
    }
  };

  return (
    <div className="flex bg-gradient-to-r from-[#a896eb] to-[#27126F] h-full">
      <Box sx={{ maxWidth: 700, margin: "auto", padding: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: "2.5rem",
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
            uiSchema={uiSchema}
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

        {formData && (
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Submitted Data:
            </Typography>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </Paper>
        )}
      </Box>
    </div>
  );
};

export default page;
