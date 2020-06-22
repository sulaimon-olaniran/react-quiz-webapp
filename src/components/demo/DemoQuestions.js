export const demoQuestions = [
    {
        questions : ["What is the longest river in the world ?" , "____ is the name of the world's longest River ?"],
        options : ["Long River", "Longer River", "River Niger", "Lake Chad", "River Benue", "River Ogun"],
        answers : ["River Nile", "Nile River"]
    },
    {
        questions : ["What is the hottest Continent on Earth ?"],
        options : ["Europe", "South America", "North America", "Antarctica", "Oceania", "Asia"],
        answers : ["Africa"]
    },
    {
        questions : ["What letter comes after Letter D ?"],
        options  : ["Letter A", "Letter Q", "Letter R", "Letter F", "Letter W", "Letter J"],
        answers : ["Letter E"]
    },
    {
        questions : ["What letter comes before Letter S ?"],
        options : ["Letter after B", "Letter after U", "Letter before Q", "Letter V", "Letter J", "Letter Y"],
        answers : ["Letter R", "Letter after Q"]
    },
    {
        questions : ["How many hours are in 2 days ?"],
        options : ["49 Hours", "50 Hours", "45 Hours", "30 Hours", "120 Hours", "38 Hours"],
        answers : ["48 Hours"]
    },
    {
        questions : ["30 days has _______ ?"],
        options : ["February", "December", "May", "January", "July", "August"],
        answers : ["November", "September", "June", "April"]
    },
    {
        questions : ["Which country is the largest in the world ?"],
        options : ["USA", "China", "Asia", "Africa", "Canada", "Ukraine", "South Africa"],
        answers : ["Russia"]
    },
    {
        questions : ["Which of these numbers is an odd number ?"],
        options : ["Four", "Eight", "Twelve", "Ten", "Six", "Twenty"],
        answers : ["Three", "Five", "Seven", "Eleven"]
    },
    {
        questions : [`"You Can't see me" is a popular saying by ?`],
        options : ["Neymar", "Chris Brown", "Eminem", "Bill Gates", "Dangote", "Ghost Man"],
        answers : ["John Cena"]
    },
    {
        questions : ["Who was the first woman to walk on the moon ?"],
        options : ["Cassie Anderson", "Amelia Bradly", "Colette Carter", "Beyonce", "I dont know", "Clara Cohan"],
        answers : ["None has", "No woman has"]
    },
    {
        questions : ["Where is the world tallest building located ?"],
        options : ["Ibadan, Nigeria", "Portugal", "California", "Italy", "USA", "United Kingdom"],
        answers : ["Dubai", "United Arab Emirates"]
    },
    {
        questions : ["_____ is the tallest building in Nigeria ?"],
        options : ["Cocoa House", "House of assembly", "Marble Towers", "Pearl Dawn", "Burj Khalifa", "Nitel Building"],
        answers : ["Necom House"]
    },
    {
        questions : ["The longest river in the United Kingdom is ?"],
        options : ["River Nile", "River Trent", "River Niger", "River Mersey", "River Tweed", "River Dee"],
        answers : ["River Severn"]
    },
    {
        questions : ["Which of these is the longest ?"],
        options : ["Centimeter", "Millimeter", "Metre", "Kilometre", "Inch", "Feet"],
        answers : ["kilometres", "Mile"] 
    },
    {
        questions : ["How many permanent teeth does a dog have ?"],
        options : ["36", "28", "40", "26", "45", "20"],
        answers : ["42"]
    },
    {
        questions : [`The "Hasta La Vista" saying is popularly know to which actor ?`],
        options : ["Van Damme", "Steven Seagal", "Brad Pitt", "Rambo", "The Rock", "Jason Statham", "Vin Diesel"],
        answers : ["A.Schwarzenegger"]
    },
    {
        questions : ["Which national team won the football World cup in 2018 ?"],
        options : ["Nigeria", "Brazil", "Germany", "England", "Italy", "Holland", "Ghana"],
        answers : ["France"]
    },
    {
        questions : ["Which US state was Donald Trump Born ?"],
        options : ["California", "Texas", "New Jersey", "Arizonia", "Ohio", "Illinois", "Los Angeles"],
        answers : ["New York"]
    },
    {
        questions : ["Los Angeles is also known as ?"],
        options : ["Lost Angels", "Angels of USA", "US Central", "Angeles Los", "Shining city"],
        answers : ["City of Angels", "City of Flowers", "Sunshine City"]
    },
    {
        questions : ["What is the capital of Germany ?"],
        options : ["Georgia", "Utah", "Missouri", "Hawaii", "Oklahoma", "Arkansas"],
        answers : ["Berlin"]
    },
    {
        questions : ["Which rock is popular referred to as Nigerian president's villa ?"],
        options : ["Olumo Rock", "Riyom Rock", "Zuma Rock", "Gibadi Rock", "Coast Rock"],
        answers : ["Aso Rock"]
    },
    {
        questions : ["How many sides does an hexagon have ?"],
        options : ["Eight", "Seven", "Five", "Four", "Nine", "Twelve"],
        answers : ["Six"]
    },
    {
        questions : ["How many planets are currently in the solar system ?"],
        options : ["Six", "Nine", "Seven", "Ten", "Eleven", "Twelve"],
        answers : ["Eight"]
    },
    {
        questions : ["____ is the closest planet to the sun ?", "Which Planet is the hottest ?"],
        options : ["Venus", "Earth", "Jupitar", "Saturn", "Mars", "Uranus", "Neptune"],
        answers : ["Mercury"]
    },
    {
        questions : ["The smallest bone in the human body is located in the ?"],
        options : ["Toes", "Fingers", "Lips", "Jaw", "Nails", "Veins", "Ribs"],
        answers : ["Ears"]
    },
    {
        questions : ["How many hearts does an Octopus have ?"],
        options : ["ten", "Six", "Two", "One", "Twelve", "Eight", "Seven"],
        answers : ["Three"]
    },
    {
        questions : ["What does GIF stands for ?"],
        options : ["Graphic Information File", "Gold In File", "Go In Fine", "Golden Info File"],
        answers : ["Graphics Interchange Format"]
    },
    {
        questions : ["How many teeth does an adult male have ?"],
        options : ["42", "36", "332", "40", "48", "28", "24"],
        answers : ["32"]
    },
    {
        questions : ["Which animal is the largest on planet earth ?"],
        options : ["Elphant", "Beetle", "Giraffe", "White Shark", "Lion", "Octopus"],
        answers : ["Blue whale"]
    },
    {
        questions : ["Who painted the Mona Lisa ?"],
        options : ["Vicent Van Gogh", "Pablo Picasso","Claude Monet", "Edger Degas", "Raphael", "Jackson Pollock"],
        answers : ["Leonardo Da Vinci"]
    },
    {
        questions : ["How many blue stripes are on the U.S flag ?"],
        options : ["Three", "Four", "fifteen","Twelve", "Seven", "Six"],
        answers : ["thirteen"]
    }
] 


export const shuffledQuestions = [] 

const shuffleArray = () => {
    while (shuffledQuestions.length <= 24) {
        const random = demoQuestions[Math.floor(Math.random() * demoQuestions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }

}

shuffleArray()