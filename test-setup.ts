import "@testing-library/jest-dom/vitest";
import { afterEach } from "node:test";
import { afterAll, beforeAll } from "vitest";
import { server } from "./src/mocks/testServer";

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})