import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';

/**
 * 
 * @param object items [{text:"", href:"", img:""}] 
 * @returns 
 */
const ItemsGridListNav = ({ items = [], mainPathname = '' }) => {
    const router = useRouter();
    const { query, pathname } = router;

    return (
        <ul className="items-grid-list-nav">
            {items.length ? items.map((item) => <li key={`li-${item.text}`}>
                <Link href={{
                    pathname: `${mainPathname ? mainPathname : pathname}${item.href.pathnameToAdd}`,
                    query: { ...query, ...item.href.queryToAdd }
                }}>
                    <Image src={item.img} width={250} height={250} alt={item.text} />
                    <span>{item.text}</span>
                </Link>
            </li>
            ) : null}
        </ul>
    )
}

export { ItemsGridListNav }
