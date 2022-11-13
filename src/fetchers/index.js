import { http } from "./http";
import axios from 'axios';

const getInformation = async () => {
  let res = await axios.get(`/information.json`);
  return res.data;
};

const getServices = async () => {
  let res = await axios.get(`/services.json`);
  return res.data;
};

const getTechskills = async () => {
  let res = await axios.get(`/techskills.json`);
  return res.data;
};

const getLanguageskills = async () => {
  let res = await axios.get(`/languageskills.json`);
  return res.data;
};

const getPortfolioFilters = async () => {
  let res = await axios.get(`/portfoliofilters.json`);
  return res.data;
};

const getPortfolios = async () => {
  let res = await axios.get(`/portfolios.json`);
  return res.data;
};

const getJobExperience = async () => {
  let res = await axios.get(`/jobexperience.json`);
  return res.data;
};

const getEducationBackground = async () => {
  let res = await axios.get(`/educationbackground.json`);
  return res.data;
};

const getClientReviews = async () => {
  let res = await axios.get(`/clientsreview.json`);
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
