export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  shortDescription: string;
  overview: string;
  significance: string;
  impact: string;
  image: string;
  imageAlt: string;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  role: string;
  years: string;
  biography: string;
  quote?: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface TimelineViewport {
  x: number;
  scale: number;
}
