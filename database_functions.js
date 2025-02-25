import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:8080",
}); //Create axios instance linked to backend

export const fetchCrimes = async (setCrimes, setLoading, setError) => {
  try {
    setError("");
    setLoading(true);

    const response = await backend.get("/crime");

    setCrimes(response.data);
    setLoading(false);
  } catch (error) {
    console.error("Error occured:", error);
    setLoading(false);
  }
};

export const registerUser = async (userData, setLoading, setError) => {
  try {
    setError("");
    setLoading(true);

    const response = await backend.post("/register", userData);

    setLoading(false);
    if (response.data[0] === false) {
      setError(response.data[1]);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error occurred:", error);
    setError("Registration failed");
    setLoading(false);
    return false;
  }
};
