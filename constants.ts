import { Player, Coach, EventDetails } from './types';

export const EVENT_DETAILS: EventDetails = {
  startDate: "Vendredi, 02 Janvier 2026",
  endDate: "Lundi, 05 Janvier 2026",
  location: "Sportzentrum Kerenzerberg, Filzbach",
  locationUrl: "https://www.szk.ch/sportzentrum.html",
  deadline: "15 Décembre 2025"
};

export const COACHES: Coach[] = [
  { name: "Samir Mulabdic", phone: "076 815 63 59" },
  { name: "Pedro Pelz", phone: "0049 1590 234 0421" },
  { name: "Alex Blazek" }
];

export const MENS_PLAYERS: Player[] = [
  { id: "1", name: "Boccard Sam", club: "Vevey", category: "Men" },
  { id: "2", name: "Falconnier Timothy", club: "1957 Lampertheim", category: "Men" },
  { id: "3", name: "Hardmeier Elias", club: "DJK SpVgg Effeltrich", category: "Men" },
  { id: "4", name: "Moullet Barish", club: "Young Stars ZH", category: "Men" },
  { id: "5", name: "Osiro Pedro", club: "Rio-Star Muttenz", category: "Men" },
  { id: "6", name: "Rebetez Yoan", club: "ZZ-Lancy", category: "Men" },
  { id: "7", name: "Schärrer Mauro", club: "Altena", category: "Men" },
  { id: "8", name: "Stoll Loïc", club: "ZZ-Lancy", category: "Men" },
  { id: "9", name: "Tschanz Cédric", club: "Rio-Star Muttenz", category: "Men" },
  { id: "10", name: "Vepa Chaitanya", club: "ZZ-Lancy", category: "Men" },
  { id: "11", name: "Simo Elias-Mate", club: "Bern", category: "Men" },
  { id: "12", name: "Ulrich Levi", club: "Rapperswil-Jona", category: "Men" },
  { id: "13", name: "Vepa Abishek", club: "ZZ-Lancy", category: "Men" },
  { id: "14", name: "Vogler Lowis", club: "Rapid Luzern", category: "Men" },
];

export const WOMENS_PLAYERS: Player[] = [
  { id: "15", name: "Doutaz Fanny", club: "ZZ-Lancy", category: "Women" },
  { id: "16", name: "Lilly Cynthia", club: "Basel", category: "Women" },
  { id: "17", name: "Maurer Ludivine", club: "Bernex", category: "Women" },
  { id: "18", name: "Hu Enya", club: "Rio-Star Muttenz", category: "Women" },
  { id: "19", name: "Patra Akhyata", club: "Neuhausen", category: "Women" },
  { id: "20", name: "Ulrich Ilvi", club: "Rapperswil-Jona", category: "Women" },
  { id: "21", name: "Wu Michelle", club: "Uster", category: "Women" },
];