import { renderHook, screen } from "@testing-library/react";
import {
  fullPiratesStateMock,
  newPirateMock,
} from "../../mocks/pirate/pirateMocks";
import { PirateStructure } from "../../store/pirate/types";
import useApi from "./useApi";
import {
  renderWithProviders,
  wrapWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { vi } from "vitest";
import Layout from "../../components/Layout/Layout";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getPirates function", () => {
  describe("When it's invoked", () => {
    test("then it should return a list of pirates", async () => {
      const piratesList: PirateStructure[] = fullPiratesStateMock;

      const {
        result: {
          current: { getPirates },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const expectedPiratesList = await getPirates();

      expect(expectedPiratesList).toStrictEqual(piratesList);
    });
  });

  describe("When it's called but can't connet to the Api Rest", () => {
    test("Then it should show a feedback modal error with the message 'Unable to load pirates'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getPirates },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const pirates = await getPirates();

      expect(pirates).toBeUndefined();
    });
  });
});

describe("Given a removePirates function", () => {
  const id = fullPiratesStateMock[0].id;
  describe("When it's called with a pirate id", () => {
    test("Then it should show a feedback modal of succes with the message 'Pirate succesfully deleted'", async () => {
      const expectedStatusCode = 200;

      const {
        result: {
          current: { removePirate },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const response = await removePirate(id as string);

      expect(response).toBe(expectedStatusCode);
    });
  });

  describe("When it's called with a pirate id but can't connet to the Api Rest", () => {
    test("Then it shoul show a error feedback with the message 'Unable to delete pirate'", async () => {
      server.resetHandlers(...errorHandlers);
      const {
        result: {
          current: { removePirate },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const response = await removePirate(id as string);

      expect(response).toBeUndefined();
    });
  });
});

describe("Given a createPirate function", () => {
  describe("When it's called and there was an error", () => {
    test("Then it should show a message with the text 'Unable to create pirate'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { createPirate },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      renderWithProviders(wrapWithRouter(<Layout />));

      await createPirate(newPirateMock);

      const errorIcon = screen.getByAltText("error icon");

      expect(errorIcon).toBeInTheDocument();
    });
  });

  describe("When it's called and there's no error", () => {
    test("Then it should show a message with the text 'Pirate succesfully created'", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { createPirate },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      renderWithProviders(wrapWithRouter(<Layout />));

      await createPirate(newPirateMock);

      const errorIcon = screen.getByAltText("successful icon");
      expect(errorIcon).toBeInTheDocument();
    });
  });
});
