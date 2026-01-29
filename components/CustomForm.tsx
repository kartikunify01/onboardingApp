"use client";
import Form from '@rjsf/mui'
// import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { Box, Typography, Paper, TextField } from '@mui/material';
import { IChangeEvent } from "@rjsf/core";

import {
  RJSFSchema,
  UiSchema,
  WidgetProps,
} from "@rjsf/utils";
import { useState } from 'react';

export const schema: RJSFSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      title: "First Name"
    },
    lastName: {
      type: "string",
      title: "Last Name"
    },
    email: {
      type: "string",
      title: "Email",
      format: "email"
    },
    consent: {
      type: "boolean",
      title: "I agree to the terms and conditions",
      const: true
    },
  },
  required: ["firstName", "lastName", "consent"],
};

    export const uiSchema: UiSchema = {
    firstName: {
        "ui:autofocus": true,
        "ui:placeholder": "Enter your first name"
    },
    lastName: {
        "ui:placeholder": "Enter your last name"
    },
    email: {
        "ui:placeholder": "email@example.com"
    },
    consent: {
        "ui:widget": "checkbox"
    },
    "ui:submitButtonOptions": {
        submitText: "Save Information"
    }
    };

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  consent: boolean;
}

const CustomTextWidget = (props: WidgetProps) => {
  const { value, onChange, label, required, rawErrors, schema } = props;
  
  return (
    <TextField
      fullWidth
      label={label}
      required={required}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      helperText={rawErrors?.[0] || schema.description}
      error={Boolean(rawErrors?.length)}
      variant="outlined"
      margin="normal"
    />
  );
};

const widgets = {
  TextWidget: CustomTextWidget
};
const CustomForm = () => {
  const [formData, setFormData] = useState<UserProfile | null | undefined>(null);

  const handleSubmit = (data: IChangeEvent<UserProfile, RJSFSchema, UserProfile>) => {
    console.log("Form data submitted:", data.formData);
    setFormData(data.formData);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Profile Form
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          validator={validator}
          widgets={widgets}
          onSubmit={handleSubmit}
        />
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

export default CustomForm;