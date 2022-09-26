import axios from "axios";

const Router = () => {
  console.log(process.env.REACT_APP_API_PAGE);
  const URL = `${process.env.REACT_APP_API_PAGE}`;

  return {
    get: async (module) => {
      const s = await fetch(`${URL}/${module}`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          return resObject;
        })
        .catch((err) => {
          console.log(err);
        });
      return s;
    },
    getUpdate: async (module, element) => {
      await axios.post(`${URL}/${module}`, element, { withCredentials: true });
    },
    put: async (module, element, id) => {
      await axios.put(`${URL}/${module}/${id}`, element);
    },
    post: async (module, element) => {
      return await axios.post(`${URL}/${module}`, element);
    },
    delete: async (module, id) => {
      await axios.delete(`${URL}/${module}/${id}`);
    }
  };
};

export default Router;
