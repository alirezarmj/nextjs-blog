// import NotificationContext from "@/store/notification-context";
// import { useContext, useEffect, useState } from "react";


const Notification = (props) => {

    // const notificationCtx = useContext(NotificationContext);

    const { title, message, status } = props;


    let styleofClass;
    if (status === 'pending') {
        styleofClass = "w-full h-[70px] bg-blue-600 fixed bottom-0"
    } else if (status === 'success') {
        styleofClass = "w-full h-[70px] bg-green-600 fixed bottom-0"
    } else if (status === 'error') {
        styleofClass = "w-full h-[70px] bg-red-600 fixed bottom-0"
    }

    return (
        <div className={styleofClass} >
            {/* <div className={styleofClass} onClick={notificationCtx.hideNotification}> */}
            <div className="max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto flex justify-between items-center h-full">
                <h2>{title}</h2>
                <h3>{message}</h3>
            </div>
        </div>
    )
}

export default Notification