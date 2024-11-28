import type { Metadata } from "next";
import { ReactNode } from "react";
import "../modules/shared/utils/styles/global.css";
import * as styles from "./styles.css";
import { MENU_RESOURCES_CONFIGS } from "../modules/shared/config/menu";
import { Sidebar } from "../modules/shared/components/core/sidebar";
import { Header } from "../modules/shared/components/core/header";
import { Title } from "../modules/shared/components/core/title";


export const metadata: Metadata = {
  title: "Defense IA | Middlewares e Centrais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.homeLayoutStyle}>
      <Sidebar.Root>
        <Sidebar.Menu resources={MENU_RESOURCES_CONFIGS} />
      </Sidebar.Root>
      <div className={styles.containerPageStyles}>
        <Header.Root>
          <Header.LeftGroup className={styles.headerGroupStyles}>
            <Title.Root size="small">
              <Title.Text>Centrais </Title.Text>
            </Title.Root>
          </Header.LeftGroup>
        </Header.Root>
        {children}
      </div>
    </main>
  );
}

