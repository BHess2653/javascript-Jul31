function getSomething(color = "transparent"){

}

function buildTeam(coach, mascot, captain, ...team){
  team.play()
  buildTeam( "Bobby", "Tom", "Ahab", "Billy", "Bob")
}

const nums = [0,1,2,3,4,5,6,7,8,9,10]
const people = ["John", "Jack", "Hugo", [...nums], "Kate", "Sun", "Jin"]

const combinedArray = [[...nums],[...people]];

const combinedArray = [...nums, 1, ...people];
