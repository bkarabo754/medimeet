'use client';

import { useParams } from 'next/navigation';

const SpecialityPage = () => {
  const { specialty } = useParams();
  return <div>SpecialityPage: {specialty}</div>;
};

export default SpecialityPage;
