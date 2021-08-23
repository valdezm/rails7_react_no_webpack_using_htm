import { render } from "react-dom"
import  h from "components/htm_create_element"
import Clock from "components/clock"
import FlavorForm from "components/flavor_form"
import LoginControl from "components/login_control"


render(
    h`
    <h1>helloworld from HTM</h1>
    <${Clock} />
    <${FlavorForm} />
    <${LoginControl} />
    `,
    document.getElementById("root")
)