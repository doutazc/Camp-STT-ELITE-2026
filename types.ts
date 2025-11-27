export interface Player {
  id: string;
  name: string;
  club: string;
  category: 'Men' | 'Women';
}

export interface Coach {
  name: string;
  phone?: string;
}

export interface EventDetails {
  startDate: string;
  endDate: string;
  location: string;
  locationUrl: string;
  deadline: string;
}