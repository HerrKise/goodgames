import React, { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

const Editor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <div className="container">
            <MDEditor value={value} onChange={setValue} />
            <MDEditor.Markdown
                source={value}
                style={{ whiteSpace: "pre-wrap" }}
            />
        </div>
    );
};

export default Editor;
