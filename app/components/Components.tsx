import { Minimenu } from "./Propcomp"
import { Tweet } from "react-tweet";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Varansi from "../../assets/Varansi.jpg"
import Folder from "../../assets/Folder.jpeg"

function Twitter2(){
 return (
  <>
  <blockquote className="twitter-tweet">
    <p lang="en" dir="ltr">Just dove 🕊️ into TypeScript!</p>&mdash; Sushil Pandey (@contactsushill) <a href="https://twitter.com/contactsushill/status/1767909553478537439?ref_src=twsrc%5Etfw">March 13, 2024</a>
    </blockquote> 
    <script async src="https://platform.twitter.com/widgets.js" ></script>
  </>
 )
}

function Twitter() {
    return (
      <div className="twitterbox rounded-md border border-zinc-50 p-4 m-2 bg-neutral-200 w-auto sm:w-auto">
        <div className="content tweet flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex items-center justify-between mb-2 lg:mb-0">
  <div className="flex items-center">
    <img
      src="https://pbs.twimg.com/profile_images/1666401418104934402/2YENIgPj_400x400.jpg"
      className="rounded-full h-12 w-12 mr-2 lg:mr-4"
    />
    <div className="flex flex-col">
      <span className="text-sm">Sushil Pandey</span>
      <span className="text-xs text-neutral-500">@contactsushill</span>
    </div>
  </div>
  <div className="flex items-center pl-10">
    <img
      src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/630d83f5a3b284176ffe8b1b_twitter-icon-min.png"
      className=" rounded-full h-12 w-12 bg-sky-400"
    />
  </div>
</div>

        </div>
        <div className="content tweet text-base tweetfont">
          Just dove 🕊️ into TypeScript!
        </div>
        <div className="content tweet flex justify-center">
          <a href="https://twitter.com/contactsushill" className="flex rounded-lg border p-1 m-2">
            <span>Tweets</span>
            <img
              src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg"
              alt=""
              className="h-4 w-4 ml-1"
            />
          </a>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
  


function Description(){
    return (
        <>
            <h1 className="aboutsh font-serif-variation font-serif text-2xl font-light !leading-tight text-neutral-400 sm:text-3xl lg:text-4xl">Hey there, I’m <span className="blackpp">Sushil</span>👋 Welcome to my corner of the internet 🥹 I have a knack for crafting digital <span className="blackpp">products</span> and currently contribute to the innovative team at <span className="blackpp">Filos</span>.<br/><br/>
            When Im not delving into pixels and code, you&#39;ll often catch me diving into the vibrant rhythms of Indian hip hop, beats and lyrics.<br/><br/>
            I&#39;m not a serious <span className="blackpp">writer</span>, but I enjoy dedicating my free time to putting my thoughts into words.</h1><br/><br/>
        
        </>
    )
}

function Gallery() {
    const [hovered, setHovered] = useState<boolean>(false);
      
    return (
        <div className="relative group h-auto w-full overflow-hidden rounded-lg bg-neutral-100 transition-colors focus-within:bg-neutral-300 hover:bg-neutral-300">
            <div className="relative h-5/6" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Minimenu 
                key="VARANSIARTI"
                Title="Projects"
                URL="/projects"
                Pro="https://ihh-player.vercel.app"
                Side="IHH Player"
            />
                </div>
                <Image src={Varansi} alt="" className={`rounded-md h-80 transition-transform duration-500 transform ${hovered ? 'translate-y-10' : 'translate-y-0'}`} />
            </div>
        </div>
    );
}

function IhhComp() {
    return (
        <div className="group w-full overflow-hidden rounded-lg bg-neutral-100 transition-colors focus-within:bg-neutral-300 hover:bg-neutral-300 flex-col">
            <Minimenu 
                key="IHHPLAy"
                Title="Projects"
                URL="/projects"
                Pro="https://ihh-player.vercel.app"
                Side="IHH Player"
            />
            <div className="boxdlee grow overflow-hidden transition-colors focus-within:bg-neutral-300 hover:bg-neutral-300 ">
                <img className="imageihh" src="https://res.cloudinary.com/djug8zfu7/image/upload/v1710139256/x9ziaczvderovrbyd39p.png" alt="IHH Player"/>
            </div>
        </div>
    );
}

function FasciaComp() {
    const [hovered, setHovered] = useState<boolean>(false);
     
    return (
        <div className="group h-80 w-full overflow-hidden rounded-lg bg-neutral-100 transition-colors focus-within:bg-neutral-300 hover:bg-neutral-300 " onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Minimenu 
                key="FASCIA"
                Title="Projects"
                URL="/projects"
                Pro="https://ihh-player.vercel.app"
                Side="IHH Player"
            />
            <div className={`relative overflow-hidden transition-transform px-2 duration-500 ${hovered ? '' : 'translate-y-6'}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <img src="https://camo.githubusercontent.com/f1e17d3bd0b19438a0c6a68182006984dda52089ce0f0592eaabc4f74feae236/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646a7567387a6675372f696d6167652f75706c6f61642f665f6175746f2c715f6175746f2f757a6f767671396173396f327a65736d34767a71" alt="IHH Player" style={{ position: 'relative', top: hovered ? '10px' : '30px' }} />
            </div>
        </div>
    );
}


export {Twitter, Twitter2, Gallery, Description, IhhComp, FasciaComp}