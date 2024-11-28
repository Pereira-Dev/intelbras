import React, { FC } from 'react';


import * as styles from './styles/sidebar-root.css';
import { SidebarRootProps } from './types';
import { Container } from '../container';
import { DefenseLogo } from '../../../assets/logos/defense';
import { IntelbrasLogo } from '../../../assets/logos/intelbras';

export const SidebarRoot: FC<SidebarRootProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Container {...rest} className={styles.sidebarRootStyle}>
      <header className={styles.sideBarHeaderStyle}>
        <DefenseLogo className={styles.sideBarDefenseLogoStyle} />
        <DefenseLogo
          className={styles.sideBarDefenseLogoSmallStyle}
          size="small"
        />

        <p className={styles.sideBarTitleHeaderStyle}>Middlewares e Centrais</p>
      </header>

      <main>{children}</main>

      <footer className={styles.sideBarFooterStyle}>
        <IntelbrasLogo className={styles.sideBarIntelbrasLogoStyle} />
      </footer>
    </Container>
  );
};
