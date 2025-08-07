import React from "react";
import Loading from "../assets/images/loading.png";


export default function PageLoading() {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
              <img src={Loading} alt="Loading..." width={100} height={100} />
        </div>
        
    );
}
