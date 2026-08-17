'use client';

import React from 'react';
import { companyData } from '@/data/company-info';

export const MapEmbed: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-gray-900">
      <iframe
        title="VENTORO S.R.L. Location Map"
        width="100%"
        height="100%"
        className="w-full h-full min-h-[300px]"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={companyData.mapEmbedUrl}
        loading="lazy"
      />
    </div>
  );
};
