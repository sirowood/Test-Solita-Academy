import React from 'react';
import PageLayout from '../components/PageLayout';

function Dashboard() {
  return (
    <PageLayout className="flex-col items-center justify-center select-none">
      <section className="flex flex-col items-center -translate-y-1/2">
        <span className="text-4xl font-extrabold animate-bounce">
          Hello Solita
        </span>
        <span>From Xuefeng Wu</span>
      </section>
    </PageLayout>
  );
}

export default Dashboard;
