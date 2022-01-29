import { appName, pages } from "../../data";

const tabTitle = (title) => {
    let newTitle = pages.find(el => el.path === title);
    return (document.title = `${newTitle.title} - ${appName}`);

};

export default tabTitle;