// task 1

// function createPhoneNumber(numbers){
//   let format = "(xxx) xxx-xxxx";
  
//   for(let i = 0; i < number.length; i+=1)
//   {
//     format = format.replace('x', number[i]);
//   }
//   return format;
// }
// numbers = 1, 2, 3, 4, 5, 6, 7, 8, 9, 0;
// console.log(format);

// task 2
// friend["Ryan", "Kieran", "Mark"]`shouldBe`["Ryan", "Mark"]
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

const friends = ["Ryan", "Kieran", "Mark"];
    let myFriendList;
    for (let friend in friends) {
        if (friend.length <= 4) {
            myFriendList.push(friend);
        }else {
            continue;
     }
    } console.log(myFriendList);
