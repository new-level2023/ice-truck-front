import Link from "next/link";
import BreadcrumbOne from "./BreadcrumbOne";
import cx from "classnames";

/**
 * 
 * @param string pageTitle 
 * @param string className for ol component
 * @param array crumbs example: [{ href:"/", text:"Home" }, { text:"Shop" }]
 * @returns 
 */
function Breadcrumb({ pageTitle, crumbs = [], classNameContainer = '' }) {
    return (
        <BreadcrumbOne pageTitle={pageTitle} classNameContainer={classNameContainer}>
            <ol className={cx("breadcrumb", { "justify-content-md-end": !!pageTitle })}>
                {crumbs.length ?
                    crumbs.map((crumb, index) => {
                        if (crumbs.length - 1 !== index) {
                            return <li className="breadcrumb-item" key={`li-${crumb.text}`}>
                                <Link href={crumb.href}>
                                    {crumb.text}
                                </Link>
                            </li>
                        }
                        else {
                            return <li className="breadcrumb-item active" key={`li-${crumb.text}-active`}>{crumb.text}</li>
                        }
                    })
                    : null}
            </ol>
        </BreadcrumbOne>
    )
}

export { BreadcrumbOne, Breadcrumb };
