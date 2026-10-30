// DATABASE PLACEHOLDER: Replace these data functions with Firebase/Supabase/SQL calls.
// The UI uses localStorage for a functional demo; no server or authentication is connected.
import type { Booking, GymClass, GymData } from './types';
const today = new Date();
const dateFromNow = (days: number) => {const d = new Date(today); d.setDate(d.getDate()+days); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
export const seedClasses: GymClass[] = [
  {id:'c1',name:'Power & Strength',category:'Strength',coach:'Marcus Lee',date:dateFromNow(1),time:'07:00',duration:60,capacity:16,room:'Studio A',intensity:'Intermediate',color:'lime'},
  {id:'c2',name:'Morning Flow Yoga',category:'Mind & Body',coach:'Sarah Tan',date:dateFromNow(1),time:'09:30',duration:50,capacity:18,room:'Zen Studio',intensity:'Beginner',color:'purple'},
  {id:'c3',name:'HIIT Burn',category:'Cardio',coach:'Daniel Wong',date:dateFromNow(1),time:'18:00',duration:45,capacity:12,room:'Studio B',intensity:'Advanced',color:'orange'},
  {id:'c4',name:'Functional Fitness',category:'Functional',coach:'Aina Rahman',date:dateFromNow(2),time:'08:00',duration:60,capacity:20,room:'Training Floor',intensity:'Intermediate',color:'blue'},
  {id:'c5',name:'Spin & Sweat',category:'Cardio',coach:'Jason Lim',date:dateFromNow(2),time:'17:30',duration:45,capacity:14,room:'Cycle Studio',intensity:'Intermediate',color:'orange'},
  {id:'c6',name:'Full Body Conditioning',category:'Strength',coach:'Marcus Lee',date:dateFromNow(3),time:'10:00',duration:60,capacity:15,room:'Studio A',intensity:'Beginner',color:'lime'},
  {id:'c7',name:'Pilates Core',category:'Mind & Body',coach:'Sarah Tan',date:dateFromNow(4),time:'11:00',duration:50,capacity:16,room:'Zen Studio',intensity:'Beginner',color:'purple'},
  {id:'c8',name:'Athletic Circuit',category:'Functional',coach:'Aina Rahman',date:dateFromNow(5),time:'19:00',duration:55,capacity:12,room:'Training Floor',intensity:'Advanced',color:'blue'},
];
export const seedBookings: Booking[] = [
  {id:'b1',classId:'c2',member:'Alex Morgan',email:'alex@example.com',status:'Confirmed',createdAt:new Date().toISOString()},
  {id:'b2',classId:'c3',member:'Alex Morgan',email:'alex@example.com',status:'Confirmed',createdAt:new Date().toISOString()},
  {id:'b3',classId:'c1',member:'Jamie Chen',email:'jamie@example.com',status:'Confirmed',createdAt:new Date().toISOString()},
  {id:'b4',classId:'c1',member:'Taylor Kim',email:'taylor@example.com',status:'Confirmed',createdAt:new Date().toISOString()},
  {id:'b5',classId:'c4',member:'Jordan Lee',email:'jordan@example.com',status:'Confirmed',createdAt:new Date().toISOString()},
];
export const initialData = (): GymData => ({classes:seedClasses,bookings:seedBookings});
export const mockDatabase = {
  load(): GymData {if (typeof window === 'undefined') return initialData();try {const value=localStorage.getItem('form-gym-demo-v1');return value?JSON.parse(value) as GymData:initialData();}catch{return initialData();}},
  save(data:GymData):void {if(typeof window!=='undefined')localStorage.setItem('form-gym-demo-v1',JSON.stringify(data));}
};
