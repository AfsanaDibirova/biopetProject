let products=[
    {
        id:1,
        img:"./images/cat.png",
        title:"Pişik evi",
        price: 32,
    },
    {
        id:2,
        img:"./images/dog.png",
        title:"İt üçün köynək",
        price: 40,
    },
     {
        id:3,
        img:"./images/pets-food-wooden-floor 1.png",
        title:"Yemək qabları",
        price: 25,
    }, 
    {
        id:4,
        img:"./images/image 1 (2).png",
        title:"Müxtəlif tasmalar",
        price: 12,
    },
]
let products2=[
    {
        id:5,
        img:"./images/Me-O Cat Food - Pets - Package Inspiration 1.png",
        title:"Pişiklər üçün quru və nəm lasos",
        price: 45 ,
        dataName:"enCoxSatilan",
    },
    {
        id:6,
        img:"./images/Natures Nuts 00029 8 Lbs Premium Safflower Seed (Pack of 4) 1.png",
        title:"Quşlar üçün çərəz",
        price: 9.90  ,
        dataName:"enCoxSatilan",


    },
     {
        id:7,
        img:"./images/image 5.png",
        title:"Balıqlar üçün quru toyuq",
        price: 19 ,
        dataName:"enCoxSatilan",

    }, 
    {
        id:8,
        img:"./images/Dog Friendly Kennebunk, Maine - Daily Dog Tag 1.png",
        title:"İtlər üçün sümüklər",
        price: 33,
        dataName:"yeniMehsul",

    },
    {
        id:9,
        img:"./images/JINX_ Premium Dog Food Made for Modern Dogs 1.png",
        title:"Pişiklər üçün çubuq",
        price: 40 ,
        dataName:"sechilenMehsul",

    },
    {
        id:10,
        img:"./images/Wagg Sets Tails Going With a Rebrand by Robot Food 1 (1).png",
        title:"Dovşanlar üçün dəri ət",
        price:40 ,
        dataName:"yeniMehsul",

    },
     {
        id:11,
        img:"./images/Kasper Faunafood Caviakorrel - Caviavoer - 4 kg 1.png",
        title:"Dovşanlar üçün dəri ət",
        price: 10 ,
        dataName:"sechilenMehsul",

    }, 
    {
        id:12,
        img:"./images/image 4.png",
        title:"Balıqlar üçün quru çörək",
        price: 25 ,
        dataName:"yeniMehsul",

    },
]
let basket= JSON.parse(localStorage.getItem("sebet")) || []