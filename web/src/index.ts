import { User } from "./models/User";

// const user = new User({});
// user.update({name: "NEW_NAME", age: 26});
// user.save();

const user = User.buildUser({id: 4});
// updateUser.update({name: "Sachet Wasti"});
// updateUser.save();
console.log(user);
user.on('change', () => {
  
  console.log('User was changed!');
  console.log(user);
});

user.fetch();