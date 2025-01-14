const quotes = [
    {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
    },
    {
    quote: "Life is a lively process of becoming.",
    author: "Gen. Douglas MacArthur",
    },
    {
    quote:
    "Life is what happens while you are busy making other plans.",
    author: "John Lennon",
    },
    {
    quote: "All great changes are preceded by chaos.",
    author: "Deepak Chopra",
    },
    {
    quote: "Change alone is eternal, perpetual, immortal",
    author: "Arthur Shopenhauer",
    },
    {
    quote: "By changing nothing, nothing changes.",
    author: "Tony Robbins",
    },
    {
    quote: "Change is inevitable. Growth is optional.",
    author: "John C. Maxwell",
    },
    {
    quote: "Change your thinking, change your life.",
    author: "Ernest Holmes",
    },
    {
    quote: "Failure is not fatal, but failure to change might be.",
    author: "John Wooden",
    },
    {
    quote: "Nothing is forever except change.",
    author: "Buddha",
    },
    ];
//위에는 불러올 명언을 스트링형식으로 구성한다.
const quote = document.querySelector("#quote span:first-child");
//quote 변수선언 = html의 id=quote의 span 첫번째 자식이다
const author = document.querySelector("#quote span:last-child");
//author 변수선언 = html id=quote의 span 마지막 자식이다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//todaysQuote 함수 선언 : 랜덤으로 불러오며, 길이는 quotes 만큼 랜덤소수점에 곱한다.
// 랜덤값은 내림한다.- 내림을 안하고 올림.하면 -1해야하며 , 반올림은 ... 그이상의 수가느으성

quote.innerText=todaysQuote.quote;
//quote->span의 첫번째에 <span>텍스트 삽입</> ... 위 오늘의 명언 의 quote를
author.innerText=todaysQuote.author;
//quote->span의 첫번째에 <span>텍스트 삽입</> ... 위 오늘의 명언저자 author를