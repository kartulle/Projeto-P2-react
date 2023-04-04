import { Outlet } from "react-router-dom";

export function Default(){
    return(
        <div className="layout">          
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}