import { SPRINTS_MOCK } from "../mocks/sprint.js";
import { v4 as uuidv4 } from "uuid";

let sprints = SPRINTS_MOCK;

export const getAllSprints = (request, response) => {
  const { teamId } = request.params;

  const filteredSprintsByTeamId = sprints.filter((sprint) => {
    return sprint.teamId === teamId;
  });

  setTimeout(() => {
    // response.status(200).json(filteredSprintsByTeamId);
    response.status(404).send(new Error('here'));
  }, 500);
};

export const getSprint = (request, response) => {
  const { teamId, sprintId } = request.params;

  const filteredSprintsByTeamId = sprints.filter((sprint) => {
    return sprint.teamId === teamId;
  });

  const sprint = filteredSprintsByTeamId.find((sprint) => {
    return sprint.id === sprintId;
  });

  setTimeout(() => {
    response.status(200).json(sprint);
  }, 500);
};

export const createSprint = (request, response) => {
  const { teamId } = request.params;
  const { sprint } = request.body;

  const updatedSprint = {
    ...sprint,
    id: uuidv4(),
    teamId,
    status: "IN_PROGRESS",
  };

  setTimeout(() => {
    sprints.push(updatedSprint);
    response.status(200).json({ status: "OK" });
  }, 500);
};

export const updateSprint = (request, response) => {
  const { sprintId } = request.params;
  const { sprint } = request.body;

  const sprintIndex = sprints.findIndex((sprint) => {
    return sprint.id === sprintId;
  });

  setTimeout(() => {
    sprints.splice(sprintIndex, 1);
    sprints.push(sprint);
    response.status(200).json({ status: "OK" });
  }, 500);
};
