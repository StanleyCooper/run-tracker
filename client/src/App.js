import React from 'react';
import RunEntryList from './components/RunEntryList';
import Header from './components/Header';

export default function App() {
  return (
    <main className="h-screen bg-gradient-to-b from-gray-500 to-gray-800">
      <Header />
      <RunEntryList />
    </main>
  )
}