import { OnlyHeaderLayout } from "../Layouts"
import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"
import { FOLLOWING_PAGE, HOME_PAGE, PROFILE_PAGE, UPLOAD } from "./path"

const publicRoute = [
    { path: HOME_PAGE, element: Home },
    { path: FOLLOWING_PAGE, element: Following},
    { path: PROFILE_PAGE, element: Profile },
    { path: UPLOAD, element: Upload, layout: OnlyHeaderLayout },
]

const privateRoute = [

]

export { privateRoute, publicRoute }
