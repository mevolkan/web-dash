import Link from "next/link";

export default function Navigation(){
    return (
        <ul>
            <li><Link href="/" />Home</li>
            <li><Link href="/about" /></li>
        </ul>
    )

}