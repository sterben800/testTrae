// 问题数据
export const questions = [
    {
        question: "What quality do you value most?",
        options: [
            { text: "Courage", points: { gryffindor: 3, hufflepuff: 1, ravenclaw: 1, slytherin: 0 } },
            { text: "Wisdom", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 3, slytherin: 1 } },
            { text: "Loyalty", points: { gryffindor: 0, hufflepuff: 3, ravenclaw: 1, slytherin: 1 } },
            { text: "Ambition", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 3 } }
        ]
    },
    {
        question: "Which pet would you choose?",
        options: [
            { text: "Owl", points: { gryffindor: 1, hufflepuff: 1, ravenclaw: 3, slytherin: 1 } },
            { text: "Cat", points: { gryffindor: 2, hufflepuff: 1, ravenclaw: 2, slytherin: 2 } },
            { text: "Toad", points: { gryffindor: 0, hufflepuff: 3, ravenclaw: 1, slytherin: 0 } },
            { text: "Snake", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 3 } }
        ]
    },
    {
        question: "What do you fear most?",
        options: [
            { text: "Failure", points: { gryffindor: 1, hufflepuff: 1, ravenclaw: 1, slytherin: 3 } },
            { text: "Loneliness", points: { gryffindor: 1, hufflepuff: 3, ravenclaw: 1, slytherin: 1 } },
            { text: "Ignorance", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 3, slytherin: 1 } },
            { text: "Fear itself", points: { gryffindor: 3, hufflepuff: 1, ravenclaw: 1, slytherin: 1 } }
        ]
    },
    {
        question: "Which magical object would you choose?",
        options: [
            { text: "Invisibility Cloak", points: { gryffindor: 2, hufflepuff: 1, ravenclaw: 2, slytherin: 2 } },
            { text: "Resurrection Stone", points: { gryffindor: 1, hufflepuff: 3, ravenclaw: 1, slytherin: 1 } },
            { text: "Elder Wand", points: { gryffindor: 2, hufflepuff: 0, ravenclaw: 1, slytherin: 3 } },
            { text: "Time-Turner", points: { gryffindor: 1, hufflepuff: 1, ravenclaw: 3, slytherin: 1 } }
        ]
    },
    {
        question: "Which weather do you prefer?",
        options: [
            { text: "Sunny", points: { gryffindor: 3, hufflepuff: 3, ravenclaw: 1, slytherin: 0 } },
            { text: "Rainy", points: { gryffindor: 1, hufflepuff: 1, ravenclaw: 3, slytherin: 2 } },
            { text: "Snowy", points: { gryffindor: 2, hufflepuff: 2, ravenclaw: 2, slytherin: 1 } },
            { text: "Cloudy", points: { gryffindor: 1, hufflepuff: 2, ravenclaw: 1, slytherin: 3 } }
        ]
    },
    {
        question: "How do you face challenges?",
        options: [
            { text: "Charge straight in", points: { gryffindor: 3, hufflepuff: 1, ravenclaw: 1, slytherin: 1 } },
            { text: "Make a plan", points: { gryffindor: 1, hufflepuff: 1, ravenclaw: 3, slytherin: 2 } },
            { text: "Seek help", points: { gryffindor: 1, hufflepuff: 3, ravenclaw: 1, slytherin: 0 } },
            { text: "Use resources", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 2, slytherin: 3 } }
        ]
    },
    {
        question: "Which place at Hogwarts would you most like to visit?",
        options: [
            { text: "Quidditch Pitch", points: { gryffindor: 3, hufflepuff: 2, ravenclaw: 1, slytherin: 1 } },
            { text: "Library", points: { gryffindor: 1, hufflepuff: 1, ravenclaw: 3, slytherin: 1 } },
            { text: "Kitchens", points: { gryffindor: 1, hufflepuff: 3, ravenclaw: 1, slytherin: 0 } },
            { text: "Slytherin Common Room", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 3 } }
        ]
    },
    {
        question: "Which subject would you choose?",
        options: [
            { text: "Defense Against the Dark Arts", points: { gryffindor: 3, hufflepuff: 1, ravenclaw: 1, slytherin: 2 } },
            { text: "Transfiguration", points: { gryffindor: 2, hufflepuff: 1, ravenclaw: 2, slytherin: 2 } },
            { text: "Herbology", points: { gryffindor: 1, hufflepuff: 3, ravenclaw: 1, slytherin: 1 } },
            { text: "Potions", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 2, slytherin: 3 } }
        ]
    },
    {
        question: "How do you handle conflict?",
        options: [
            { text: "Stand up for others", points: { gryffindor: 3, hufflepuff: 1, ravenclaw: 0, slytherin: 1 } },
            { text: "Mediate between sides", points: { gryffindor: 1, hufflepuff: 3, ravenclaw: 1, slytherin: 0 } },
            { text: "Find a solution", points: { gryffindor: 1, hufflepuff: 1, ravenclaw: 3, slytherin: 1 } },
            { text: "Protect yourself", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 3 } }
        ]
    },
    {
        question: "How do you want others to describe you?",
        options: [
            { text: "Brave", points: { gryffindor: 3, hufflepuff: 1, ravenclaw: 1, slytherin: 0 } },
            { text: "Intelligent", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 3, slytherin: 1 } },
            { text: "Kind", points: { gryffindor: 0, hufflepuff: 3, ravenclaw: 1, slytherin: 0 } },
            { text: "Successful", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 1, slytherin: 3 } }
        ]
    }
];

// 学院描述
export const houseDescriptions = {
    gryffindor: "Welcome to Gryffindor, the house of courage, determination, and bravery! Home to great witches and wizards like Harry Potter and Albus Dumbledore, Gryffindors always stand up for what's right.",
    hufflepuff: "Welcome to Hufflepuff, the house of loyalty, kindness, and hard work! Known for its inclusiveness and dedication, Hufflepuffs value friendship and fair play above all else.",
    ravenclaw: "Welcome to Ravenclaw, the house of wisdom, creativity, and curiosity! Ravenclaws love learning and pursuing knowledge, producing many great scholars and inventors.",
    slytherin: "Welcome to Slytherin, the house of ambition, cunning, and leadership! Slytherins have a strong sense of purpose and determination, producing many influential witches and wizards."
};

// 学院名称映射
export const houseNames = {
    gryffindor: "Gryffindor",
    hufflepuff: "Hufflepuff",
    ravenclaw: "Ravenclaw",
    slytherin: "Slytherin"
};