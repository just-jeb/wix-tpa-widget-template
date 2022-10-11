import { navigate } from "@wix/dashboard-sdk";
import type { FC } from "react";
import { Avatar, Box, Card, ListItemSelect, ListItemSelectProps } from "wix-style-react";

export type WidgetItemProps = Pick<ListItemSelectProps, 'title' | 'subtitle' | 'suffix'> & { pageId: string };

export const WidgetItem: FC<WidgetItemProps> = ({ title, subtitle, suffix, pageId }) => (
    <>
        <ListItemSelect
            onClick={() => navigate(pageId)}
            title={title}
            prefix={<Box paddingLeft={'12px'}><Avatar size="size30" /></Box>}
            subtitle={subtitle}
            suffix={<Box paddingRight={'12px'}>{suffix}</Box>}
            size='medium'
        />
        <Box padding={'0 24px'}>
            <Card.Divider />
        </Box>
    </>
)