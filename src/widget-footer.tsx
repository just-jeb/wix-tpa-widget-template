import { navigate } from "@wix/dashboard-sdk";
import { Box, TextButton } from "wix-style-react";

export const WidgetFooter = () => <Box padding={'16px 24px'}>
    <SeeAllButton/>
</Box>

export const SeeAllButton = () => <TextButton size={'tiny'} weight='normal' onClick={() => navigate('contacts-page-component')}>See All (10)</TextButton>