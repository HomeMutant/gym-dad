'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {initialData,mockDatabase} from '@/lib/mock-db';
import type {GymClass,GymData} from '@/lib/types';
type Context = {data:GymData; ready:boolean; book:(id:string)=>boolean; cancel:(id:string)=>void; addClass:(value:Omit<GymClass,'id'>)=>void; deleteClass:(id:string)=>void; reset:()=>void};
const GymContext=createContext<Context|null>(null);
export const DEMO_USER={name:'Alex Morgan',email:'alex@example.com'};
export function GymProvider({children}:{children:ReactNode}){
 const [data,setData]=useState<GymData>(initialData);const [ready,setReady]=useState(false);
 useEffect(()=>{setData(mockDatabase.load());setReady(true);},[]);
 useEffect(()=>{if(ready)mockDatabase.save(data);},[data,ready]);
 const book=(id:string)=>{const item=data.classes.find(c=>c.id===id);if(!item)return false;const count=data.bookings.filter(b=>b.classId===id&&b.status==='Confirmed').length;const existing=data.bookings.some(b=>b.classId===id&&b.email===DEMO_USER.email&&b.status==='Confirmed');if(existing||count>=item.capacity)return false;setData(v=>({...v,bookings:[...v.bookings,{id:crypto.randomUUID(),classId:id,member:DEMO_USER.name,email:DEMO_USER.email,status:'Confirmed',createdAt:new Date().toISOString()}]}));return true;};
 const cancel=(id:string)=>setData(v=>({...v,bookings:v.bookings.map(b=>b.id===id?{...b,status:'Cancelled' as const}:b)}));
 const addClass=(item:Omit<GymClass,'id'>)=>setData(v=>({...v,classes:[...v.classes,{...item,id:crypto.randomUUID()}]}));
 const deleteClass=(id:string)=>setData(v=>({...v,classes:v.classes.filter(c=>c.id!==id),bookings:v.bookings.filter(b=>b.classId!==id)}));
 const reset=()=>{localStorage.removeItem('form-gym-demo-v1');setData(initialData());};
 return <GymContext.Provider value={{data,ready,book,cancel,addClass,deleteClass,reset}}>{children}</GymContext.Provider>;
}
export const useGym=()=>{const context=useContext(GymContext);if(!context)throw new Error('Wrap in GymProvider');return context;};
