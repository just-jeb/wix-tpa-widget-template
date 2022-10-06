import type React from 'react';
import { Avatar, Box, Card, ListItemSelect, TextButton, ThemeProvider } from 'wix-style-react';
import { theme } from 'wix-style-react/themes/businessDashboard';
import { Add } from 'wix-ui-icons-common';
export interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme({ active: true })}>
      <Card>
        <Card.Header title="Hello TPA" suffix={ <TextButton size={'tiny'} weight='normal' prefixIcon={<Add/>}>Add New</TextButton>}/>
        <Box paddingTop={'12px'} direction='vertical'>
          <ListItemSelect
            title="I am a WSR list Item"
            prefix={<Avatar size="size30" />}
            subtitle="Called ListItemSelect"
            suffix="11 Sep 1988"
            size='medium'
          />
          <Card.Divider />
          <ListItemSelect
            title="I am brought from remote"
            prefix={<Avatar size="size30" />}
            subtitle="A simulated on of course"
            suffix="16 May 2016"
            size='medium'
          />
          <Card.Divider />
          <ListItemSelect
            title="I am clickable"
            prefix={<Avatar size="size30" />}
            subtitle="The CTAs are clickable too"
            suffix="11 Dec 2019"
            size='medium'

          />
          <Card.Divider />
        </Box>
        <Box padding={'16px 24px'}>
          <TextButton size={'tiny'} weight='normal'>See All(10)</TextButton>
        </Box>
      </Card>
    </ThemeProvider>
  );
};
