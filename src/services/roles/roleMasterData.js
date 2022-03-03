 import axios from "axios";

export default function getRoleMasterData() {
//  fetch all data from api
  let data = [];
  axios.get("http://127.0.0.1:8000/management/roles-api/").then(res => {
    data = res.data.data;
  });
  return data;

  // return [
  //   {
  //     id: 1,
  //     name: "Admin"
  //   },
  //   {
  //     id: 2,
  //     name: "Super Admin"
  //   },
  //   {
  //     id: 3,
  //     name: "Cashier"
  //   }
  // ];
}
