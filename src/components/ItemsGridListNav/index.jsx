import Image from 'next/image';
import Link from 'next/link'

/**
 * 
 * @param object items [{text:"", href:""}] 
 * @returns 
 */
const ItemsGridListNav = ({ items = [] }) => {
    return (
        <ul className="items-grid-list-nav">
            {items.length ? items.map((item) => <li key={`li-${item.text}`}>
                <Link href={item.href}>
                    <Image src={item.img} width={250} height={250} />
                    <span>{item.text}</span>
                </Link>
            </li>
            ) : null}
        </ul>
    )
}

export { ItemsGridListNav }
