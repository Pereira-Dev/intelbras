import type { Metadata } from "next";
import { ReactNode } from "react";
import "../modules/shared/utils/styles/global.css";
import * as styles from "./styles.css";
import { MENU_RESOURCES_CONFIGS } from "../modules/shared/config/menu";
import { Sidebar } from "../modules/shared/components/core/sidebar";


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
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
