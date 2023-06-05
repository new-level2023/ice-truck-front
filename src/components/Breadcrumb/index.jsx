import Link from "next/link";
import BreadcrumbOne from "./BreadcrumbOne";

/**
 * 
 * @param string pageTitle 
 * @param array crumbs example: [{ href:"/", text:"Home" }, { text:"Shop" }]
 * @returns 
 */
function Breadcrumb({ pageTitle, crumbs = [] }) {
    return (
        <BreadcrumbOne pageTitle={pageTitle}>
            <ol className="breadcrumb justify-content-md-end">
                {crumbs.length ?
                    crumbs.map((crumb, index) => {
                        if (crumbs.length - 1 !== index) {
                            return <li className="breadcrumb-item">
                                <Link href={crumb.href}>
                                    {crumb.text}
                                </Link>
                            </li>
                        }
                        else {
                            return <li className="breadcrumb-item active">{crumb.text}</li>
                        }
                    })
                    : null}
            </ol>
        </BreadcrumbOne>
    )
}

export { BreadcrumbOne, Breadcrumb };
