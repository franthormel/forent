import Image from "next/image";

export default function ProfileIconMenu() {
    return <div className="relative h-36 w-36">
        <Image src="/profile.jpg" alt="Profile" fill={true} className=" object-cover rounded-full" />
    </div>;
}