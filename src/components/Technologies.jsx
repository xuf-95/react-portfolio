import { RiReactjsLine } from "react-icons/ri"
import { SiApachehadoop } from "react-icons/si";
import { SiApacheflink } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiApachehive } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApachehadoop className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApacheflink className="text-7xl text-pink-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApachekafka className="text-7xl text-black-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApachehive className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApachespark className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-400" />
            </div>
        </div>
        
    </div>
  )
}

export default Technologies;
