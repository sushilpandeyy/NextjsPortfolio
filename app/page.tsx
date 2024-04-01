"use client";
import About from "./components/About";
import { Gallery, FasciaComp } from "./components/Components";
import Menuhead from "./components/Menuhead";
import { Blogcard } from "./components/Propcomp";
import { CardStack } from "./components/card-stack";

export default function Home() {
  return (
    <>
    <div className="m-10 mt-1">
    <Menuhead
    key="SUSHIL"
    Title="Sushil"
    />
    <About/>
    <div className="grid grid-cols-3 gap-4 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="m-1"><Gallery/></div>
      <div className="m-1"><FasciaComp/></div>
      <div className="m-1">
        <Blogcard 
        key="SOLANA"
        Title="Online Hackathon Experience"
        Date="July 24, 2023"
        Description="Experience at HackSRM 4.0, where we, a bunch of first-year enthusiasts, formed a team named ‘The Dictators.’ The 24-hour hackathon took place from 19th to 20th May 2023,"
        URL="https://Medium.com/@contactsushil"
        />
        </div>
    </div>
    </div>
    </>
  );
}
