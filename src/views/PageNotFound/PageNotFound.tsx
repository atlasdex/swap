// import Div from "components/DivComponent"
import loadable from '@loadable/component'
const Flex = loadable(() => import('components/Box'))

const PageNotFound: React.FC = () => {
    return (
       <Flex>
           Page Not Found
       </Flex>
    )
}
export default PageNotFound