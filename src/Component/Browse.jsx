import { useSelector } from "react-redux"
import useApi from "../Hooks/useApi"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GptSearch from "./GptSearch"

const Browse = () => {
  const GptSearchState = useSelector((store) => store.gptSearchState.GptSearch)
  useApi()
  return (
    <div >
      {
        GptSearchState ? <GptSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}
export default Browse