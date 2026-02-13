import { type Term, type GraphData } from './types';

const API_URL = '/api';

export const fetchTerms = async (): Promise<Term[]> => {
  const res = await fetch(`${API_URL}/terms`);
  return res.json();
};

export const fetchGraphData = async (): Promise<GraphData> => {
  const res = await fetch(`${API_URL}/graph`);
  return res.json();
};