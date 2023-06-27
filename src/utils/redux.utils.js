import { createAction } from "@reduxjs/toolkit";

export const createActions = (sliceName, actionTypes) =>
  actionTypes.reduce(
    (actions, type) => ({
      ...actions,
      [type]: createAction(`${sliceName}/${type}`),
    }),
    {}
  );
