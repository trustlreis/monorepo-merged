import ApiClient from "./pokemon-master-client.js"; 

const apiClient = new ApiClient({
  baseUrl: "http://localhost:8080",
  username: "user",
  password: "user",
});

(async () => {
  try {
    const masters = await apiClient.getAllMasters();
    console.log("Masters:", masters);
  } catch (error) {
    console.error("Error:", error);
  }
})();
