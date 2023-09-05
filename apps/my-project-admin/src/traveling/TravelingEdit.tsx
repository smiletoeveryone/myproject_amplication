import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TravelingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="product_name" source="productName" />
        <TextInput label="product_stock" source="productStock" />
        <TextInput label="product_type" source="productType" />
      </SimpleForm>
    </Edit>
  );
};
