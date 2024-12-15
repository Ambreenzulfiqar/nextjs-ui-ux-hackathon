import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";


export default function FeaturedPost(){
    return(
        <div className="w-[1050px] h-[1044px] mx-auto absolute top-[4300px] flex flex-col items-center justify-center">
            <div className="w-[691px] h-[134px] text-center ">
                <h2 className="text-2xl font-bold">Featured Posts</h2>
                <p>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div >
                    
                    <Image src={"/images/featured1.png"} alt="post" width={500} height={500}/>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Loudest à la Madison #1 
                        (L&apos;integral)</h2>
                        <p className="text-sm">We focus on ergonomics and meeting
                            you where you work. It&apos;s only a
                            keystroke away.</p>
                            <button className="flex items-center gap-x-2 font-bold">Learn More <AiOutlineRight color={"#23A6F0"}/></button>
                    </div>
                </div>
                <div className="relative">
                <div className="px-2 text-white bg-red-500 absolute left-3 top-3 uppercase">new</div>
                <Image src={"/images/featured2.png"} alt="post" width={500} height={500}/>
                <div className="space-y-4">
                        <h2 className="text-xl font-bold">Loudest à la Madison #1 
                        (L&apos;integral)</h2>
                        <p className="text-sm">We focus on ergonomics and meeting
                            you where you work. It&apos;s only a
                            keystroke away.</p>
                            <button className="flex items-center gap-x-2 font-bold">Learn More <AiOutlineRight color={"#23A6F0"}/></button>
                    </div>

                </div>
                <div>
                <Image src={"/images/featured3.png"} alt="post" width={500} height={500}/>
                <div className="space-y-4">
                        <h2 className="text-xl font-bold">Loudest à la Madison #1 
                        (L&apos;integral)</h2>
                        <p className="text-sm">We focus on ergonomics and meeting
                            you where you work. It&apos;s only a
                            keystroke away.</p>
                            <button className="flex items-center gap-x-2 font-bold">Learn More <AiOutlineRight color={"#23A6F0"}/></button>
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

                </div>
            </div>
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      