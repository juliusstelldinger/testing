const axios = require("axios");
const TodosQueries = require("./TodosQueries");
const TodosMutations = require("./TodosMutations");
const expectedResult1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2025-10-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-03-08T08:24:38.000Z",
};
beforeAll(async () => {
  await TodosMutations.createTodo(
    expectedResult1.userId,
    expectedResult1.task,
    expectedResult1.isDone,
    expectedResult1.dueDate
  );
});

describe("Testing GET Functions of Todo Route", () => {
  test("Teste GET /all Funktion", async () => {
    const result = await TodosQueries.fetchAllTodos();
    const todo1 = result[0];

    expect(todo1.userId).toBe(expectedResult1.userId);
    expect(todo1.isDone).toBe(expectedResult1.isDone);
    expect(todo1.dueDate).toBe(expectedResult1.dueDate);
    expect(todo1.task).toBe(expectedResult1.task);
  });

  test("Test for todos by Id Route", async () => {
    // Falls ihr keinen Ansatz habt, kopiert euch den Code von oben
    // und geht anschließen Schritt für Schritt vor und passt die einezelnen Parameter an
  });
});
