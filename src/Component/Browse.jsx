import useApi from "../Hooks/useApi"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  useApi()
  return (
    <div className="">
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
export default Browse