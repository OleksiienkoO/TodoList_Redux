import "./ColorPanel.css";

const ColorPanel = () => {
    const setTheme = (theme) => {
        document.body.className = "";
        document.body.classList.add(theme);
    };
    return ( <
        div >
        <
        button className = "blue_color"
        onClick = {
            () => setTheme("theme-blue") } > { " " } <
        /button>{" "} <
        button className = "red_color"
        onClick = {
            () => setTheme("theme-red") } >
        < /button>{" "} <
        /div>
    );
};

export default ColorPanel;