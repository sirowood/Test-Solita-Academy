import React from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';
import {
  loading,
  loadingHeading,
  loadingIcon,
  loadingText,
} from '../styles/components/loading.styles';

function Loading() {
  return (
    <section className={loading}>
      <LoadingIcon className={loadingIcon} />
      <span className={loadingHeading}>Loading...</span>
      <span className={loadingText}>I'm still working on it</span>
    </section>
  );
}

export default Loading;
