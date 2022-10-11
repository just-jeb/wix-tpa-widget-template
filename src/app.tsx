import { FC, useEffect } from 'react';
import type React from 'react';
import { Avatar, Box, Card, ListItemSelect, ListItemSelectProps, TextButton, ThemeProvider } from 'wix-style-react';
import { theme } from 'wix-style-react/themes/businessDashboard';
import { Add } from 'wix-ui-icons-common';
import { observeState } from '@wix/dashboard-sdk';
export interface AppProps {
  className?: string;
}

const ListItem: FC<ListItemSelectProps> = ({ title, subtitle, suffix }) => (
  <><ListItemSelect
    title={title}
    prefix={<Box paddingLeft={'12px'}><Avatar size="size30" /></Box>}
    subtitle={subtitle}
    suffix={<Box paddingRight={'12px'}>{suffix}</Box>}
    size='medium'
  />
    <Box padding={'0 24px'}>
      <Card.Divider />
    </Box></>
)

export interface DashboardWidgetProps {
  onLoaded?: () => void;
}

export const App: React.FC<AppProps> = () => {
  useEffect(() => {
    observeState<DashboardWidgetProps>(props => {
      props.onLoaded?.();
    })
  }, [])
  return (
    <ThemeProvider theme={theme({ active: true })}>
      <Card>
        <Card.Header title="Hello TPA" suffix={<TextButton size={'tiny'} weight='normal' prefixIcon={<Add />}>Add New</TextButton>} />
        <Box paddingTop={'12px'} direction='vertical'>
          <ListItem
            title="I am a WSR list Item"
            subtitle="Called ListItemSelect"
            suffix="21 Sep 1988"
          />
          <ListItem
            title="I am brought from remote"
            subtitle='A simulated one of course'
            suffix="16 May 2016"
          />
          <ListItem
            title="I am clickable"
            subtitle="The CTAs are clickable too"
            suffix="11 Dec 2019"
          />
        </Box>
        <Box padding={'16px 24px'}>
          <TextButton size={'tiny'} weight='normal'>See All (10)</TextButton>
        </Box>
      </Card>
    </ThemeProvider>
  );
};
