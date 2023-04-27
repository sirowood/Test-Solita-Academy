import React from 'react';
import PageLayout from '../components/PageLayout';
import TopBar from '../components/TopBar';
import { heading, dashBoardSection } from '../styles/pages/dashboard.styles';

function Dashboard() {
  return (
    <PageLayout>
      <TopBar title="Dashboard"></TopBar>
      <section className={dashBoardSection}>
        <h1 className={heading}>Hello Solita</h1>
        <span>From Xuefeng Wu</span>
      </section>
    </PageLayout>
  );
}

export default Dashboard;
