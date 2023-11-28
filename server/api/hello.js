export default defineEventHandler(async (event) => {
  return {
    body: {
      message: 'Hello from the API!',
    },
  };
});
