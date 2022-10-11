import { observeState } from '@wix/dashboard-sdk';
import { FC, useEffect, useState } from 'react';
import { Box, Card, ThemeProvider } from 'wix-style-react';
import { theme } from 'wix-style-react/themes/businessDashboard';
import { fetchData } from './widget-data.service';
import { WidgetFooter } from './widget-footer';
import { WidgetHeader } from './widget-header';
import { WidgetItem } from './widget-item';

export interface DashboardWidgetProps {
  onLoaded?: () => void;
}

export const Widget: FC = () => {

  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {

    const fetchAndNotifyLoaded = async () => {
      const remoteData = await fetchData();
      setData(remoteData);
      observeState<DashboardWidgetProps>(props => {
        // This notifies the host that your widget was loaded and is ready to be displayed
        props.onLoaded?.();
      })
    }

    void fetchAndNotifyLoaded();

  }, [])


  return (
    <ThemeProvider theme={theme({ active: true })}>
      <Card>
        <WidgetHeader/>
        <Box paddingTop={'12px'} direction='vertical'>
          {data.map(({ id, content, hint, dateCreated, pageId }) => (<WidgetItem key={id} title={content} subtitle={hint} suffix={dateCreated} pageId={pageId} />))}
        </Box>
        <WidgetFooter/>
      </Card>
    </ThemeProvider>
  );
};
