

export function loadContact()
{
    const contact = [
        {
            text: "Phone Number",
            info: "+374 069482456",
        },
        {
            text: "Email",
            info: "BrickIceCream@gmail.com",
        },
        {
            text: "Location",
            info: "My House",
        },

        
    ]
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "Contact";

    content.appendChild(header);

    const ul = document.createElement("ul");
    for (let details of contact)
    {
        const li = document.createElement("li");


        const p1 = document.createElement("p");
        p1.textContent = details.text;
        const p2 = document.createElement("p");
        p2.textContent = details.info;

        li.appendChild(p1);
        li.appendChild(p2);

        ul.appendChild(li);
    }


    const main = document.createElement("main");
    main.id = "main";
    
    main.appendChild(ul);
    content.appendChild(main);

}