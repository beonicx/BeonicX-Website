'use client'

import CardList from '@/components/caseStudy/casestudy'
import React from 'react'
import { useTheme } from '@/context/ThemeContext'

const Page = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <CardList darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  )
}

export default Page;
