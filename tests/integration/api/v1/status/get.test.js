test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  const postgresVersion =
    await responseBody.dependencies.database.postgres_version;
  expect(postgresVersion).toEqual("16.0");

  const maxConnections =
    await responseBody.dependencies.database.max_connections;
  expect(maxConnections).toEqual(100);

  const usedConnections =
    await responseBody.dependencies.database.opened_connections;
  expect(usedConnections).toEqual(1);
});
