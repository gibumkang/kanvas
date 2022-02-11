import Link from "next/link";

const Services = () => {
    return (
        <div>
            <Link href="/services/engage">
                <a>Engage</a>
            </Link>
            <Link href="/services/extend">
                <a>Extend</a>
            </Link>
            <Link href="/services/reward">
                <a>Reward</a>
            </Link>
        </div>
    )
}

export default Services
