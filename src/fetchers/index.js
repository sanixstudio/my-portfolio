import { http } from "./http";

const getInformation = async () => {
  let res = await http.get(`/information.json`);
  return res.data;
};

const getServices = async () => {
  let res = await http.get(`/services.json`, { method: 'GET' });
  return res.data;
};

const getTechskills = async () => {
  let res = await http.get(`/techskills.json`, { method: 'GET' });
  return res.data;
};

const getLanguageskills = async () => {
  let res = await http.get(`/languageskills.json`, { method: 'GET' });
  return res.data;
};

const getPortfolioFilters = async () => {
  let res = await http.get(`/portfoliofilters.json`, { method: 'GET' });
  return res.data;
};

const getPortfolios = async () => {
  let res = await http.get(`/portfolios.json`, { method: 'GET' });
  return res.data;
};

const getJobExperience = async () => {
  let res = await http.get(`/jobexperience.json`, { method: 'GET' });
  return res.data;
};

const getEducationBackground = async () => {
  let res = await http.get(`/educationbackground.json`, { method: 'GET' });
  return res.data;
};

const getClientReviews = async () => {
  let res = await http.get(`/clientsreview.json`, { method: 'GET' });
  return res.data;
};

export {
  getInformation,
  getServices,
  getTechskills,
  getLanguageskills,
  getPortfolioFilters,
  getPortfolios,
  getJobExperience,
  getEducationBackground,
  getClientReviews,
};
