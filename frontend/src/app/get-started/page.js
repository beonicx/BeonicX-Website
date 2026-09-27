'use client'
import ContactUs from '@/components/getStarted/contactUs/ContactUs'
import { useTheme } from '@/context/ThemeContext'

const Page = () => {
  const { darkMode } = useTheme();

  return <ContactUs darkMode={darkMode} />;
}

export default Page
