
import portfolioData from '../data/portfolio.json';
import { PortfolioData } from '../types';

export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};
