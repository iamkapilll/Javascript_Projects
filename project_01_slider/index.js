const comments = [
    {
        name: "virat kohli",
        photoUrl: "https://im.rediff.com/cricket/2023/mar/12kohli-anu1.jpg?w=450&h=450",
        text: "Virat Kohli is unique because of his aggressive batting style, intense competitiveness, exceptional consistency across formats, and strong leadership as a captain. His passion, fitness regime, and mental toughness set him apart in the cricketing world."
    },
    {
        name: "MS Dhoni",
        photoUrl: "https://cricfit.com/wp-content/uploads/2020/07/ezgif.com-gif-maker-56.jpg",
        text: "He is known for his unorthodox captaincy, approachability and has earned a reputation of being a successful leader. Dhoni is also known for his cool-headed demeanor on the field which has earned him the monicker "
    },
    {
        name: "Sachin Tendulkar",
        photoUrl: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/04/24135535/Sachin-Tendulkar-Biography-Early-Life-Family-Cricket-Career-Records-and-Legacy.png",
        text: "Fondly called the “God of Cricket” or “Master Blaster,” Sachin Tendulkar is considered one of the greatest batsmen of all time in the sport that is considered a national institution in India, cricket."
    }

];

const imageElement = document.querySelector('img')
const textElement = document.querySelector('.text')
const usernameElement = document.querySelector('.username')

let index = 0

updateProfile()


function updateProfile() {
    const {name, photoUrl, text} = comments[index]    //  //This is destructuring. It pulls out the current comment’s:
    imageElement.src = photoUrl
    textElement.innerText = text
    usernameElement.innerText = name

    index++

    if(index === comments.length){  // if index is equal to the length of the array that is 3 it will reset the index to 0
        index = 0
    }
    setTimeout(() => {
        updateProfile()
    } , 3000) 
   
}

