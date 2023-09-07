"use client"
import { usePage } from '@/store';
import React from 'react'

export default function LockedScreen() {
    const changePage = usePage((state) => state.changePage);

  return (
    <div>
        <button onClick={() => changePage("desktop")}>değiştir</button>
    </div>
  )
}
