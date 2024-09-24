import { useState, useEffect } from "react"

const Contact = () => {
    const [count, setCount] = useState(0);



    return (
        <div>
            <h1 className="js-type-writer">Lorem ipsum dolor <br /> sit amet consectetur, adipisicing elit. Officia, rem.</h1>

            <p>count: {count}</p>
            <p onClick={() => setCount(count + 1)}>b</p>
        </div>
    )
}

export default Contact

// const el = document.querySelector(".js-type-writer")
// const text = el.innerHTML;

// (function _type(i = 0) {
//   if (i === text.length) return

//   el.innerHTML =
//     text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
//   setTimeout(() => _type(i + 1), 100)
// })()
