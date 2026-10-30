export type GymClass = {
  id: string;
  name: string;
  category: 'Strength' | 'Cardio' | 'Mind & Body' | 'Functional';
  coach: string;
  date: string;
  time: string;
  duration: number;
  capacity: number;
  room: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced';
  color: string;
};
export type Booking = { id: string; classId: string; member: string; email: string; status: 'Confirmed' | 'Cancelled'; createdAt: string };
export type GymData = { classes: GymClass[]; bookings: Booking[] };
