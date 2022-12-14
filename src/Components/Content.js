import React from "react";
import "./Content.css";
import head from "./Images/medusa-head.gif";
import fontheader from "./Images/MEDUSA.png"
import info1 from "./Images/info1.png"
import info2 from "./Images/info2.png"
import info3 from "./Images/info3.png"
import cloud from "./Images/cloud1.png"
import cloudshadow from "./Images/cloudShadow.png"
import athena from "./Images/athena.gif"
import medusa2 from "./Images/medusa2.png"
import text from "./Images/text-medusa.png"
import medusagif from "./Images/medusa.gif"
import poom from "./Images/poom-1.png"
import dear from "./Images/dear-2.png"
import earn from "./Images/earn-3.png"
import book from "./Images/book-4.png"
import phing from "./Images/phing-5.png"
import mook from "./Images/mook-6.png"

function Content() {
  return (
    <div>
      <section className="banner-bg" id="home">
        <div>
        <img src={head} className="medusa-head"></img>
        </div>
        <div>
        <img src={fontheader}  className="font-head" ></img>
        </div>
        <div>
        <img src="https://media.discordapp.net/attachments/947170089902440508/1044935154994524251/image.png?width=591&height=676"  className="cloudright"></img>
        </div>
        <div>
        <img src={info1}  className="info1"></img>
        </div>
        <div id="cloudanimate">
        <img src={cloud} className="cloud1"></img>
        </div>
        <div>
        <img src={cloud} className="cloud2"></img>
        </div>
      </section>
      <section className='banner-bg2' id="story">
          {/* ภาพต่อ */}
      </section>
      <section className='banner-bg3'>
      <div>
      <img src={info2} className="info2"></img>
      </div>
      <div>
      <img src={cloudshadow}  className="cloudsd"></img>
      </div>
      <div>
      <img src="https://media.discordapp.net/attachments/947170089902440508/1044943944221466674/image.png" className="sanc"></img>
      </div>
      <div>
      <img src="https://media.discordapp.net/attachments/947170089902440508/1044942911965499492/dirt.png" className="ground"></img>
      </div>
      </section>
      <section  className='banner-bg4'>
          {/* ภาพต่อ */}
      </section>
      <section  className='banner-bg5'>
        <div>
        <img src={athena} className="athena"></img>
        </div>
        <div>
        <img src={info3} className="info3"></img>
        </div>
        <div>
        <img src={cloud} className="cloud3"></img>
        </div>
        <div>
        <img src={medusa2} className="medusa2"></img>
        </div>
      </section>
      <section  className='banner-bg6'>
          {/* ภาพต่อ */}
      </section>
      <section  className='banner-bg7'>
        <div>
        <img src={text} className="text-medusa"></img>
        </div>
        <div>
        <img src={medusagif} className="gif-medusa"></img>
        </div>
      </section>
      <section  className='banner-bg8'>
          {/* ภาพต่อ */}
      </section>
      <section className='banner-bg9' id="about">
        <div className='textme'>
          <h1><b>About Us</b></h1>
        </div>
          <div className='boxbox'>
          <div>
            <img src={poom} className='poom-1'></img>
          </div>
          <div>
            <img src={dear} className='dear-2'></img>
          </div>
          <div>
            <img src={earn} className='earn-3'></img>
          </div>
          <div>
            <img src={book} className='book-4'></img>
          </div>
          <div>
            <img src={phing} className='phing-5'></img>
          </div>
          <div>
            <img src={mook} className='mook-6'></img>
          </div>
          </div>
      </section>
    </div>
  );
}

export default Content;
