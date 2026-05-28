/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppSection = 'home' | 'servicos' | 'sobre' | 'cidades' | 'faq';

export interface ServiceCardType {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface DetailedServiceType {
  id: string;
  title: string;
  description: string;
  includes: string[];
  ctaText: string;
}

export interface AdvantageCardType {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface FAQItemType {
  question: string;
  answer: string;
}

export interface NeighborhoodType {
  name: string;
  isSede?: boolean;
  description: string;
}

export interface CityType {
  name: string;
  description: string;
}
