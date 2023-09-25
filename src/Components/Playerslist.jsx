import React from "react";
import "../App.css";
import Carditem from "./Carditem";

function Playlist(props) {
  let data = [
    {
      name: "cristiano ronaldo",
      url: "https://www.footmercato.net/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg",
      country: "Portugal",
      flag: "https://download.vikidia.org/vikidia/fr/images/thumb/a/ad/Drapeau_du_Portugal.svg/1200px-Drapeau_du_Portugal.svg.png",
      number: "7",
      age: "38",
    },

    {
      name: "david bekam",
      url: "https://www.footballtradedirectory.com/images/pictures/news-images/david-beckham-england.jpg?v=0bf8378f",
      country: "England",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
      number: "7",
      age: "48",
    },

    {
      name: "Neymar",
      url: "https://images.rtl.fr/~c/2000v2000/rtl/www/1557089-neymar-avec-le-bresil-au-qatar-le-5-decembre-2022.jpg",
      country: "brazil",
      flag: "https://www.larousse.fr/encyclopedie/data/images/1009466-Drapeau_du_Br%C3%A9sil.jpg",
      number: "10",
      age: "31",
    },

    {
      name: "zidane",
      url: "https://img.allfootballapp.com/www/M00/3E/24/720x-/-/-/rB8CLFz2eaqAWVXWAACLb-QhSTE421.jpg.webp",
      country: "France",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Flag_of_France_%28bordered%29.svg/2560px-Flag_of_France_%28bordered%29.svg.png",
      number: "10",
      age: "51",
    },
  ];

  return (
    <div className="players-list">
      <h1>list players</h1>
      <div className="players-container">
        {data.map((elt) => (
          <Carditem
            name={elt.name}
            url={elt.url}
            country={elt.country}
            flag={elt.flag}
            number={elt.number}
            age={elt.age}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
