"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import Image from "next/image";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }

  return (
    <main className="relative w-full bg-white text-gray-900">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40"></div>

        <div className="absolute top-5 left-5 z-20">
          <Image src="/header.png" alt="Logo" width={120} height={50} />
        </div>

        <div className="relative z-30 px-8 w-[80%] text-center space-y-6">
          <div className="inline-block px-6 py-3 bg-white text-black font-medium text-lg rounded-full cursor-pointer hover:bg-gray-100 transition">
            Programme Overview
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About the NIGCOMSAT Accelerator Programme
          </h1>

          <p className="text-lg md:text-xl text-white">
            The Accelerator Programme connects startups, researchers, and
            innovators with the tools, mentorship, and resources they need to
            turn ideas into impactful solutions. Through data, technology, and
            collaboration, we help you build, test, and scale projects that
            drive real-world change.
          </p>

          <button className="px-6 py-3 bg-[#0060B6] text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">
            Read Full Details
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto gap-10">
        <div className="flex-1 space-y-4">
          <p className="inline-block px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium">
            Legal Support for Startups
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Understanding the Start-up Act
          </h2>

          <p className="text-gray-700 text-base md:text-lg">
            The Start-up Act is a government initiative that gives startups
            legal recognition and access to funding, training, and innovation
            support. This platform helps you understand and use these
            opportunities to scale your impact.
          </p>

          <button className="px-6 py-3 bg-[#0060B6] text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">
            Read Full Document
          </button>
        </div>

        <div className="flex-1 relative w-full h-64 md:h-80">
          <Image
            src="/handshake.jpg"
            alt="Legal Support"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto gap-10">
        <div className="flex-1 relative w-full h-64 md:h-80">
          <Image
            src="/satellite.png"
            alt="Innovation Support"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          <p className="inline-block px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium">
            Powered by Satellite Data
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Using Satellite Data & Technology
          </h2>

          <p className="text-gray-700 text-base md:text-lg">
            Satellite data enables real-time insights into weather patterns,
            crop health, and environmental conditions. On this platform, we use
            these technologies to help startups and researchers make informed,
            data-driven decisions that improve efficiency and sustainability.
          </p>

          <button className="px-6 py-3 bg-[#0060B6] text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">
            Read full details
          </button>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Choose Your Focus Domain
        </h2>

        <p className="text-gray-700 text-base md:text-lg mb-8">
          Select the area you’ll be working on. You can always switch later from
          your dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          <div className="flex flex-col gap-4">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-black hover:text-white transition">
              Agritech
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-black hover:text-white transition">
              Health Tech
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-black hover:text-white transition">
              Telecommunications
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-black hover:text-white transition">
              Fintech
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-black hover:text-white transition">
              Logistics
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-black hover:text-white transition">
              Security
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowDashboard(true)}
          className="mt-10 px-6 py-3 bg-[#0060B6] text-white rounded-full text-lg hover:bg-blue-700 transition"
        >
          Continue to Dashboard
        </button>
      </section>
    </main>
  );
}
