import Image from "next/image";

export default function White(){
    return(
        <div className="max-w-[1440px] absolute top-[3780px] left-[100px] mx-auto flex flex-col md:flex-row items-center justify-center h-[682px]">
            <div className="w-[704px] h-[682px] flex items-center justify-center">
                <Image src={"/images/asian-woman.png"} alt="asian couple" width={500} height={500}
                className="object-cover w-full h-full"/>
            </div>
            <div className="p-4 space-y-4">
                <h2>SUMMER 2020</h2>
                <h3 className="text-4xl font-bold w-[375px] ">Part of the Neural 
                Universe</h3>
                <p className="w-[375px] text-xl">We know how large objects will act, 
                but things on a small scale.</p>
                <div className="flex items-center gap-2">
                    <button className="w-[156px] h-[52px] bg-green-500 text-white">BUY NOW</button>
                    <button className="w-[156px] h-[52px] text-green-500 border-2 border-green-500">BUY NOW</button>

                </div>
            </div>

        </div>
    )
}