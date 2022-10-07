import React from "react";

const Nav = () => {
    const categories = [
        {
            name: "Commercial", description: "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "Portraits", description: "Portraits of people in my life" },
        { name: "Food", description: "Delicious delicacies" },
        {
            name: "Landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];


    function categorySelected(name) {
        console.log(`${name} clicked`)
    }


    return (
        <div>
            <header className="flex-row px-1">
                <h2>
                    <a href="/">
                        <span role="img" aria-label="camera">📸</span> Oh Snap!
                    </a>
                </h2>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="#about">
                                About Me
                            </a>
                        </li>
                        <li className="mx-2">
                            <span>Contact</span>
                        </li>
                        {categories.map((category) => (
                            <li className="mx-1" key={category.name}> {/*key helps React keep track of items in VDOM*/}
                                <span onClick={() => categorySelected(category.name)}>
                                    {category.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav;