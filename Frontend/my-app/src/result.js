import React from "react";
import "./css/result.css"
import Navbar from './defaults/navbar';
import SearchBar from './searchbar';
import Footer from './defaults/footer';

function Result() {

    const url="https://image.tmdb.org/t/p/w500"
    const completed= [
        { img: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg", title: 'The Dark Knight', score: "9", date: "2022-03-15" },
        { img: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", title: "The Lord of the Rings:The Return of the King", score: "9", date: "2022-03-15" },
        { img: "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg", title: "Seven Samurai", score: "9.5", date: "2022-03-15"  },
        { img: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", title: 'The Lord of the Rings: The Fellowship of the Ring', score: "9.5", date: "2022-03-15" },
        { img: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", title: 'Spider-Man: Into the Spider-Verse', score: "9", date: "2022-03-15" },
        { img: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", title: 'Interstellar', score: "9.5", date: "2022-03-15" },
        { img: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", title: "The Shawshank Redemption", score: "8.5", date: "2022-03-15" },
        { img: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", title: "Forrest Gump", score: "9.5", date: "2022-03-15"  },
        { img: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", title: 'The Godfather', score: "9", date: "2022-03-15" },
        { img: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", title: 'The Godfather part 2', score: "9.5", date: "2022-03-15" },
        { img: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", title: 'The Godfather part 2', score: "9.5", date: "2022-03-15" }
      ];

    return(
        <div>
            <Navbar/>
            <SearchBar/>
            <div className="resultbox">
                {completed.map(card => (
                    <div>
                        <img src={url+card.img} />
                        <p>{card.title}</p>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Result;