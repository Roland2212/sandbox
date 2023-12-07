import { TEAMS_MOCK } from "../mocks/team.js";

let teams = TEAMS_MOCK;

export const getAllTeams = (request, response) => {
  setTimeout(() => {
    response.status(200).json(teams);
  }, 500);
};

export const getTeam = (request, response) => {
  setTimeout(() => {
    response.status(200).json(teams[0]);
  }, 500);
};

export const createTeam = (request, response) => {
  console.log(request.body);
  response.status(200).json({ status: "OK" });
};

export const updateTeam = (request, response) => {
  console.log(request.body);
  response.status(200).json({ status: "OK" });
};
