import { useParams } from "react-router-dom"


function withRouter(Components){
return (props)=>{
   const params = useParams()
   return <Components {...props } params={params}/>
}

}
export default withRouter