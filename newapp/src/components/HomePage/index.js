import {useNavigate} from "react-router-dom"
import {FormContainer, FormElement,Heading,Labels,TopicInput,FileInput,SubmitButton} from "./styledComponents"
const Home =(props) =>{
    const navigate = useNavigate()
    const submission = (event)=>{
        event.preventDefault()
        console.log("submitted")
        const file = document.getElementById("File")
        console.log(file.files[0])
        navigate("/chat")
    }

    return(
    <FormContainer>
        <FormElement onSubmit={submission}>
            <Heading color="rgb(16, 189, 242)">DOCUCHART</Heading>
            <Labels htmlFor="topic">Enter the topic</Labels>
            <TopicInput id="topic" type="text"/>
            <Labels htmlFor="File">Upload the File</Labels>
            <FileInput id="File" type="file"/>
            <SubmitButton to="/chat" type="submit" >Submit</SubmitButton>
        </FormElement>
    </FormContainer>
)

}
export default Home