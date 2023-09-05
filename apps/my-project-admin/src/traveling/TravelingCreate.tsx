import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TravelingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="product_name" source="productName" />
        <TextInput label="product_stock" source="productStock" />
        <TextInput label="product_type" source="productType" />
      </SimpleForm>
    </Create>
  );
};
