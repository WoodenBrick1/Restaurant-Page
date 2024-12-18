
export function loadMain ()
{
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "Homepage";

    content.appendChild(header);

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.textContent = "Welcome to THE BEST ice-cream shop on EARTH, every single flavour is made with love by the brick themself (a.k.a me :D).";
    p2.textContent = "So what are you waiting for? go buy some for you, or your partner, or your dog(just not the chocolate one) , ";
    p3.textContent = "i hope i see you soon!!!";

    const main = document.createElement("main");
    main.id = "main";

    main.appendChild(p1);
    main.appendChild(p2);
    main.appendChild(p3);
    
    content.appendChild(main);

} 


