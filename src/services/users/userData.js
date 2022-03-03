export default function getUserData() {
  return [
    {
      id: 1,
      username: "Pavan",
      name: "Leela Pavan",
      password: "123456",
      role: null
    },
    {
      id: 2,
      username: "polash",
      name: "Polash Ahmed",
      password: "123456",
      role: {
        id: 2,
        name: "Super Admin"
      }
    },
    {
      id: 3,
      username: "nur",
      name: "Nur Islam",
      password: "password",
      role: {
        id: 1,
        name: "Admin"
      }
    },
    {
      id: 4,
      username: "Dip Jyoti",
      name: "dip",
      password: "123456",
      role: null
    }
  ];
}
