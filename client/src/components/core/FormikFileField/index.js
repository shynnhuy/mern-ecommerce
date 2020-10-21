import React from "react";
import { Field } from "formik";
import { Input } from "@material-ui/core";
import Button from "components/Admin/CustomButtons/Button";

const FormikFileField = ({ name, label, previewFile }) => {
  const fileRef = React.useRef(null);
  const handleClick = (e) => {
    fileRef.current.click();
  };
  return (
    <Field name={name}>
      {({ form }) => {
        const handleFileChange = (e) => {
          e.preventDefault();
          const file = e.target.files[0];
          form.setFieldValue(name, file);
          previewFile(file);
        };
        return (
          <React.Fragment>
            <Button color="info" onClick={handleClick}>
              Choose {label}
            </Button>
            <Input
              type="file"
              onChange={handleFileChange}
              inputRef={fileRef}
              style={{ display: "none" }}
            />
          </React.Fragment>
        );
      }}
    </Field>
  );
};

export default FormikFileField;
