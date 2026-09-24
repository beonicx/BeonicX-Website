'use client';

import { useTheme } from '@/context/ThemeContext';
import WhatsAppButton from '@/constants/whatsapp/whatsapp';
import FeatureSection from '@/components/home/featureSection';
import Testonomial from '@/components/home/testonomial';
import Slider from '@/constants/slider1/Slider';
import FreelamceBanner from '@/components/home/join';
import IndustrySlider from '@/components/home/industrySlider';
import Toppage from '@/components/home/top';

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <>
      <Toppage darkMode={darkMode} />
      <FeatureSection darkMode={darkMode} />
      <Slider darkMode={darkMode} />
      <Testonomial darkMode={darkMode} />
      <IndustrySlider darkMode={darkMode} />
      <WhatsAppButton darkMode={darkMode} />
      <div className="px-4 sm:px-10">
        <FreelamceBanner darkMode={darkMode} />
      </div>
    </>
  );
}
