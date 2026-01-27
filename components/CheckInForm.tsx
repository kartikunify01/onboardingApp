// "use client";

// import React, { useState } from "react";
// import validator from "@rjsf/validator-ajv8";
// import Form, { IChangeEvent } from "@rjsf/core";
// import { RJSFSchema, UiSchema } from "@rjsf/utils";
// import { Box, Paper, Typography } from "@mui/material";


// const uiSchema: UiSchema = {

// };

// interface UserProfile {
//   "Check-In for Date": string;
//   "Select Language": string;
//   "What Did You Complete Today?": string;
//   "Issues or Blockers Faced": string;
//   "Related Links": string;
// }
// const CheckInForm = () => {
//   const [formData, setFormData] = useState<UserProfile | null | undefined>(
//     null,
//   );

//   const handleSubmit = (
//     data: IChangeEvent<UserProfile, RJSFSchema, UserProfile>,
//   ) => {
//     console.log("Form data submitted:", data.formData);
//     setFormData(data.formData);
//   };

//   return (
//     <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         User Profile Form
//       </Typography>

//       <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
//         <Form
//           schema={schema}
//           validator={validator}
//           uiSchema={uiSchema}
//           //   validator={validator}
//           //   onSubmit={handleSubmit}
//           className=""
//         />
//       </Paper>

//       {formData && (
//         <Paper elevation={3} sx={{ padding: 3 }}>
//           <Typography variant="h6" gutterBottom>
//             Submitted Data:
//           </Typography>
//           <pre>{JSON.stringify(formData, null, 2)}</pre>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default CheckInForm;


'use client';

import React, { useState } from "react";

import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material";
import { RJSFSchema, UiSchema } from "@rjsf/utils";


const schema: RJSFSchema = {
  type: "object",
  properties: {
    checkInDate: {
      type: "string",
      title: "Check-In Date",
      format: "date",
    },
    language: {
      type: "string",
      title: "Select Language",
      enum: ["English", "Hindi", "French", "Spanish"],
    },
    completed: {
      type: "string",
      title: "What Did You Complete Today?",
    },
    blockers: {
      type: "string",
      title: "Issues or Blockers Faced",
    },
    links: {
      type: "string",
      title: "Related Links",
    },
  },
};   
const uiSchema: UiSchema = {
    completed: {
        "ui:widget": "textarea",
        "ui:options": { rows: 4 },
        "ui:classNames": "rounded-2xl",
        "ui:placeholder": "Summarize your completed tasks for today",
    },
    blockers: {
        "ui:widget":"textarea",
        "ui:placeholder": "Specify your issues faced",
        "ui:options": { rows: 4 },

    },
    links: {
        "ui:placeholder": "Specify your issues faced",
    },
    "ui:submitButtonOptions": {
        props: {
        className: "submitBtn",
        },
    },
};

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "oklch(51.1% 0.262 276.966)",
            },
        },
        notchedOutline: {
            border: "2px solid gray", // border line
            borderRadius: "999px", // pill shape
        },
      },
    },
  },
});

// const theme = createTheme({
//   typography: {
//     fontFamily: "Poppins, sans-serif",
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//             border:"1px solid green",
//             borderRadius:"99999px"
//         },

//       },
//     },
    
//   },
// });


// ---------------- COMPONENT ----------------
export default function CheckInForm() {
  const [data, setData] = useState<any>(null);

  const handleSubmit = ({ formData }: any) => {
    console.log("Submitted:", formData);
    setData(formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "750px",
          margin: "auto",
          padding: 4,
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
          }}
        >
          Daily Check-In Report
        </Typography>

        {/* FORM CARD */}
        <Paper
          elevation={50}
          sx={{
            padding: 4,
            borderRadius: "20px",
            background: "#ffffff",
          }}
        >
          <Form
            schema={schema}
            uiSchema={uiSchema}
            validator={validator}
            onSubmit={handleSubmit}
          />
        </Paper>

        {/* OUTPUT */}
        {data && (
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              mt: 4,
              borderRadius: "15px",
              background: "#f9f9f9",
            }}
          >
            <Typography variant="h6">Submitted Data:</Typography>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Paper>
        )}
      </Box>
    </ThemeProvider>
  );
}
