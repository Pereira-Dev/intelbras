import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { iconLoaderStyle, loaderStyle } from "./styles/loader.css"

export const Loader = () => {
    return (
        <div className={loaderStyle}>
            <FontAwesomeIcon className={iconLoaderStyle} fontSize="3.4rem" icon={faCircleNotch} spin />
        </div>
    )
}