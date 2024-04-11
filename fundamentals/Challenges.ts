//#Challenge Enum
enum UserRole {
  Admin, 
  Manager, 
  Employee
}

type User = {
  id: number;
  name: string;
  role: UserRole
}

type Contact = [string, number]


function createUser(user: User): User {
  return user
}

let user1 = {
  id: 1,
  name: "Carlos",
  role: UserRole.Admin,
  contact: ["ch@gmail.com", 9999999]
}

const result = createUser(user1)
console.log(result)
