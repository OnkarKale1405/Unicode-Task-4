import { Link } from "react-router-dom";

export default function ErrorPage() {
    return(
        <div className="error-page">
            <h2>ERROR PAGE 404</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti a nihil deserunt hic
            porro aut magnam nostrum fugiat voluptates, tempore dolor autem sequi omnis obcaecati
            consequatur. Recusandae, explicabo sequi.</p>

            <p>Click to go back to <Link to="/" >Homepage</Link></p>
        </div>
    )
};
