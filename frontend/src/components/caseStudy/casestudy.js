"use client";
import React from "react";
import Image from 'next/image';
import Footer from "@/layouts/footer/Footer";
import Navbar from "@/layouts/navbar/Navbar";
import Header from "../header/Header";

const appData = [
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Astral Adhesives – Resiwood Winners' Circle",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Node JS", "MySQL"],
  },
  {
    title: "Art of Living A Meditation App",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    tags: ["Android", "Flutter", "Node JS", "iOS"],
  },
  {
    title: "FitTrack - Fitness & Workout Tracker",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "React Native"],
  },
  {
    title: "EduLearn - Online Learning Platform",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Node JS", "MongoDB"],
  },
  {
    title: "ShopEasy - E-commerce Shopping App",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Flutter", "Firebase"],
  },
  {
    title: "TravelMate - Travel Booking App",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Node JS", "PostgreSQL"],
  },
  {
    title: "MusicStream - Audio Streaming Service",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Swift", "Kotlin"],
  },
  {
    title: "HealthPlus - Medical Appointment App",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "React Native", "Node JS"],
  },
  {
    title: "BankSecure - Mobile Banking App",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Node JS", "Security"],
  },
  {
    title: "WeatherNow - Weather Forecast App",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Flutter", "API"],
  },
  {
    title: "ChatConnect - Social Messaging App",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    tags: ["Android", "iOS", "Firebase", "Real-time"],
  },
];

const Card = ({ title, image, tags }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full sm:w-[30%] flex flex-col">
    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-md mb-4">
      <Image
        src={image}
        alt={title}
        fill
        className="rounded-md object-cover hover:scale-105 transition-transform duration-300"
        unoptimized
      />
    </div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800 min-h-[3.5rem]">{title}</h3>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);
  

const CardList = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <Header />
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between gap-6">
        {appData.map((app, index) => (
          <Card key={index} {...app} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default CardList;