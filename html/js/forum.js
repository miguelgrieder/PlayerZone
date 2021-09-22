var defaultThreads = [
    {
        id: 1,
        title: "Final do jogo. SPOILERS!!!",
        author: "Matheus",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Matheus",
                date: Date.now(),
                content: "Muito bom!"
            },
            {
                author: "Otávio",
                date: Date.now(),
                content: "Chorei."
            }
        ]
    },
    {
        id: 2,
        title: "Como passar da 2° fase?",
        author: "Matheus",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Matheus",
                date: Date.now(),
                content: "Como passo do chefe da 2° fase?"
            },
            {
                author: "Miguel",
                date: Date.now(),
                content: "Tem que atirar na cabeça dele."
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}