"use client";

import { Box, Paper, TextField, Typography } from "@mui/material";
import Form, { IChangeEvent } from "@rjsf/core";
import { FieldTemplateProps, RJSFSchema, WidgetProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { useState } from "react";

const schema: RJSFSchema = {
  type: "object",
  required: ["firstName", "lastName", "managerFirstName", "managerLastName"],
  properties: {
    firstName: { type: "string", title: "First Name" },
    lastName: { type: "string", title: "Last Name" },
    managerFirstName: { type: "string", title: "Manager's First Name" },
    managerLastName: { type: "string", title: "Manager's Last Name" },
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
  const {
    classNames,
    style,
    help,
    description,
    errors,
    children,
  } = props;
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

  const handleSubmit = (
    data: IChangeEvent<UserProfile, RJSFSchema, UserProfile>,
  ) => {
    console.log("Form data submitted:", data.formData);
    setFormData(data.formData);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{
        fontSize:"2rem",
        fontWeight:"bold",
        color:"#5c37eb",
      }}>
        Employee Onboarding Login
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3,gap:4 }}>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          validator={validator as any}
          onSubmit={handleSubmit}
          widgets={widgets}
          templates={templates}
        >
          <button type="submit" style={{margin:8,cursor:"pointer",padding:8,backgroundColor:"#5c37eb",color:"white",borderRadius:"1rem"}}>Login</button>
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
  );
};

export default page;
