import type {Metadata} from 'next';
import './globals.css';
import {GymProvider} from '@/components/GymProvider';
export const metadata:Metadata={title:'FORM — Gym Booking',description:'Gym class booking and management demo'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><GymProvider>{children}</GymProvider></body></html>;}
