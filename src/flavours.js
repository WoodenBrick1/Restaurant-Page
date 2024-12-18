export const flavours = [
    {
        name: "Chocolate",
        price: "1.65$",
    },
    {
        name: "Vanilla",
        price: "1.40$",
    },
    {
        name: "Strawberry",
        price: "3.00$",
    },
    {
        name: "Mint",
        price: "2.60$",
    },
    {
        name: "Cookie Dough",
        price: "5.00$",
    },
    {
        name: "Lemonade",
        price: "1.00$",
    },
    {
        name: "Secret Flavour",
        price: "???$",
    },
    {
        name: "ALL THE FLAVOURS",
        price: "20.00$",
    },
];


export function loadFlavours (flavours)
{
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "Flavours";

    content.appendChild(header);

    const ul = document.createElement("ul");


    

    for (let cream of flavours)
    {
        const li = document.createElement("li");


        const p1 = document.createElement("p");
        p1.textContent = cream.name;
        const p2 = document.createElement("p");
        p2.textContent = cream.price;

        li.appendChild(p1);
        li.appendChild(p2);

        ul.appendChild(li);
    }


    const main = document.createElement("main");
    main.id = "main";
    main.appendChild(ul);
    content.appendChild(main);
}