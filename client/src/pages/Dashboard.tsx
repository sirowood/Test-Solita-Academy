import React from 'react';
import PageLayout from '../components/PageLayout';
import { heading, section, dashboard } from '../styles/pages/dashboard.styles';

function Dashboard() {
  return (
    <PageLayout classProps={dashboard}>
      <section className={section}>
        <h1 className={heading}>Hello Solita</h1>
        <span>From Xuefeng Wu</span>
      </section>
    </PageLayout>
  );
}

export default Dashboard;
