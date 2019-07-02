import classnames from "classnames";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

export default ({content = "medium", header = true, footer = true, children}) => (
    <div>
        <Head/>
        {header && <Header/>}
        <div className={classnames("page", {
            "content-center": content === "center",
            "content-tiny": content === "tiny",
            "content-small": content === "small",
            "content-medium": content === "medium",
            "content-big": content === "big",
        })}>
            {children}
        </div>
        {footer && <Footer/>}
        <style jsx global>{`
            body {
                margin: 0;
            }

            .btn-primary {
                font-weight: bold;
                font-family: "PT Sans", sans-serif;
                letter-spacing: 1px;
                margin-right: 10px;
                height: 35px;
                width: 100px;
                background-color: #fff;
                border: 2px solid #000;
                font-size: 14px;
                color: #000;
                border-radius: 5px;
                cursor: pointer;
            }

            .btn-primary:hover {
                color: #007fff;
                border: 2px solid #007fff;
            }

            .btn-primary:active {
                outline: none;
            }

            .btn-primary:focus {
                outline: none;
            }

            .description {
                margin: 8px 0;
                color: #a7afb5;
                font-family: "PT Sans", sans-serif;
            }

            .link {
                color: #007fff;
                text-decoration: none;
                font-family: "PT Sans", sans-serif;
            }

            .internal-link {
                color: #7d8791;
                text-decoration: none;
                font-family: "PT Sans", sans-serif;
            }

            .internal-link:hover {
                color: black;
            }

            .internal-link-active {
                color: black;
            }

            .btn-link {
                display: inline-block;
                margin-top: 10px;
                margin-right: 10px;
            }

            .content-center {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }

            .content-tiny {
                width: 400px;
                margin: auto;
            }

            .content-small {
                width: 500px;
                margin: auto;
            }

            .content-medium {
                width: 750px;
                margin: auto;
            }

            .content-big {
                width: 1000px;
                margin: auto;
            }

            .text {
                font-family: "PT Sans", sans-serif;
                font-size: 14px;
            }

            .desc {
                font-family: "PT Sans", sans-serif;
                font-size: 14px;
                color: #a7afb5;
            }

            .title {
                font-family: "PT Sans", sans-serif;
            }

            .small-title {
                color: #a7afb5;
                font-family: "PT Sans", sans-serif;
                font-size: 16px;
                margin: 0 0 10px 0;
            }

            .granit-editor-container {
                background-color: #f2f3f4;
                border-radius: 5px;
            }

            .granit-editor:focus {
                outline: none;
            }

            .granit-editor-highlight .string {
                color: #78C365;
            }

            .granit-editor-highlight .comment {
                color: #a7afb5;
            }

            .granit-editor-unsaved-indicator {
                background: #4BA7DB;
            }
        `}</style>
    </div>
);
