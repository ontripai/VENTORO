export type Language = 'ro' | 'en';

export interface ServiceFAQ {
  qRo: string;
  qEn: string;
  aRo: string;
  aEn: string;
}

export interface WorkflowStep {
  title: string;
  desc: string;
}

export interface ServiceClusterItem {
  id: string;
  slugRo: string;
  slugEn: string;
  titleRo: string;
  titleEn: string;
  shortDescRo: string;
  shortDescEn: string;
  fullDescRo: string;
  fullDescEn: string;
  iconName: string;
  image: string;
  featuresRo: string[];
  featuresEn: string[];
  specsRo: { label: string; value: string }[];
  specsEn: { label: string; value: string }[];
  clusterSubtopicsRo: string[];
  clusterSubtopicsEn: string[];
  applicationsRo?: string[];
  applicationsEn?: string[];
  workflowStepsRo?: WorkflowStep[];
  workflowStepsEn?: WorkflowStep[];
  faqs?: ServiceFAQ[];
  externalUrl?: string;
  gallery?: string[];
}

export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
}

export interface ProjectItem {
  id: string;
  titleRo: string;
  titleEn: string;
  categoryRo: string;
  categoryEn: string;
  descriptionRo: string;
  descriptionEn: string;
  challengeRo?: string;
  challengeEn?: string;
  solutionRo?: string;
  solutionEn?: string;
  resultsRo?: string[];
  resultsEn?: string[];
  year: string;
  locationRo: string;
  locationEn: string;
  stats: string;
  image: string;
  tags?: string[];
}

export interface CompanyInfo {
  legalName: string;
  tradeName: string;
  taglineRo: string;
  taglineEn: string;
  cui: string;
  regCom: string;
  euid: string;
  dateOfRegistration: string;
  director: string;
  registeredOffice: string;
  operationalOffice: string;
  phoneRo: string;
  phoneAt: string;
  email: string;
  officeEmail: string;
  workingHoursRo: string;
  workingHoursEn: string;
  mapEmbedUrl: string;
}
