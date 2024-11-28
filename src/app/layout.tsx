import type { Metadata } from "next";
import { ReactNode, useEffect, useState } from "react";
import "../modules/shared/utils/styles/global.css";
import * as styles from "./styles.css";
import { MENU_RESOURCES_CONFIGS } from "../modules/shared/config/menu";
import { Sidebar } from "../modules/shared/components/core/sidebar";
import { Header } from "../modules/shared/components/core/header";
import { Title } from "../modules/shared/components/core/title";
import { fetchCentrals } from "../modules/center/containers/CenterList/services/CenterList.services";
import { CentralCounter } from "../modules/shared/components/CentralCounter/CentralCounter";




export const metadata: Metadata = {
    title: "Defense IA | Middlewares e Centrais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                <main className={styles.homeLayoutStyle}>
                    <Sidebar.Root>
                        <Sidebar.Menu resources={MENU_RESOURCES_CONFIGS} />
                    </Sidebar.Root>
                    <div className={styles.containerPageStyles}>
                        <Header.Root>
                            <Header.LeftGroup className={styles.headerGroupStyles}>
                                <CentralCounter />
                            </Header.LeftGroup>
                        </Header.Root>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}