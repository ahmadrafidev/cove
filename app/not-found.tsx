'use client'

import Link from "next/link"
import { Home, MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="relative">
            <div className="text-6xl font-bold text-blue-600 mb-2">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Looks like you`ve ventured too far
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The page you are looking for seems to have drifted away into the digital ocean.
              Let`s get you back to familiar waters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                <Home className="w-5 h-5" />
                Return Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <MoveLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="text-4xl">🌊</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}