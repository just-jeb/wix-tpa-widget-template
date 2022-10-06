import type React from 'react';
import { st, classes } from './app.st.css';
import { Header } from './header';
import { Card } from 'wix-style-react';

export interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
  return (
    <Card>
      <Card.Header title="Hello WSR" />
      <Card.Content>
        <main className={st(classes.root, className)}>
          <Header className={classes.header} />
        </main>
      </Card.Content>
    </Card>
  );
};
