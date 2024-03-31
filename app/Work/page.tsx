
import Menuhead from "../components/Menuhead";
import Workcard from "../components/Workcard"
import { projects } from "@/data/info";

interface MyObject {
  id: string;
  name: string;
  sub: string;
  img: string;
}

function spit(data:MyObject){
return (
  <Workcard
    id={data.id}
    Title={data.name}
    Sub={data.sub}
    Img={data.img}
    />
)
}

export default function Work() {
  
  return (
    <>
    <div className="m-10 mt-1">
    <Menuhead
    key="SUSHIL"
    Title="Work"
    />
    </div>
    <div className="grid md:m-8 md:grid-cols-3 gap-4 m-4">
    {projects.map(spit)}
    </div>
    </>
  );
}
