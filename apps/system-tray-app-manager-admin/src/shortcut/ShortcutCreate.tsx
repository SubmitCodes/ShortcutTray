import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";

export const ShortcutCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="appField.id" reference="AppModel" label="App">
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="position" source="position" />
      </SimpleForm>
    </Create>
  );
};
