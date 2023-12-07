import { SPRINTS_MOCK } from "../mocks/sprint.js";

let sprints = SPRINTS_MOCK;

export const getAllSprints = (request, response) => {
  setTimeout(() => {
    response.status(200).json(sprints);
  }, 500);
};

export const createSprint = (request, response) => {
  console.log(request);
  response.status(200).json({ status: "OK" });
};

export const updateSprint = (request, response) => {
  console.log(request);
  response.status(200).json({ status: "OK" });
};
