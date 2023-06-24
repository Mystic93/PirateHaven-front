import { rest } from "msw";
import { userTokenMock } from "./user/userMocks";
import { fullPiratesStateMock, newPirateMock } from "./pirate/pirateMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: userTokenMock,
      })
    );
  }),
  rest.get(`${apiUrl}/pirates`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fullPiratesStateMock));
  }),

  rest.delete(`${apiUrl}/pirates/:idPirate`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post(`${apiUrl}/pirates/create`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(newPirateMock));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}/pirates/:idPirate`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.post(`${apiUrl}/pirates/create`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
