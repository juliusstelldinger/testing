const axios = require("axios");
const TodosQueries = require("./TodosQueries");

jest.mock("axios");

describe("Testing GET Functions of Todo Route", () => {
  test("Teste TodosQueries Funktion", async () => {
    const mockData = {
      data: [
        {
          id: 6,
          userId: 1,
          task: "Trinken",
          isDone: true,
          dueDate: "2024-11-10T00:00:00.000Z",
          createdAt: "2024-02-28T08:17:33.000Z",
          updatedAt: "2024-02-28T13:10:19.000Z",
        },
      ],
    };
    axios.get.mockResolvedValue(mockData);

    const result = await TodosQueries.fetchAllTodos();

    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5051/v1/todos/all"
    );
  });
});
