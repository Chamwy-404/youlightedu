export const createUser = (data) => ({
  fullName: data.fullName || "",
  email: data.email || "",
  password: data.password || "",
  age: data.age || ""
});
