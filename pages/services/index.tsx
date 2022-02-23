import Link from "next/link";
import CheckMarkBullet from "../../components/Services/components/CheckMarkBullet/CheckMarkBullet";
import CircleCircleBullet from "../../components/Services/components/CircleCircleBullet/CircleCircleBullet";
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
            {/* <YellowLetteringParagraph text="Hello Moto" />
            <CheckMarkBullet>
                <p>Yo yo yo</p>
            </CheckMarkBullet> */}
            <CircleCircleBullet index={1}>
                <p>Hello World!</p>
            </CircleCircleBullet>
        </div>
    )
}

export default Services
