import { Card, TextButton } from "wix-style-react";
import { Add } from "wix-ui-icons-common";

export const WidgetHeader = () => <Card.Header title="Hello TPA" suffix={<AddNewButton/>} />

export const AddNewButton = () => <TextButton size={'tiny'} weight='normal' prefixIcon={<Add />}>Add New</TextButton>