import Link from "next/link";
import YellowLetteringParagraph from "../../components/Services/components/YellowLetteringParagraph";

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
            <YellowLetteringParagraph text="Hello Moto" />
        </div>
    )
}

export default Services
