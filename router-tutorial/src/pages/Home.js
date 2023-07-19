import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <p>반갑습니다</p>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profile/lee">개발자1</Link>
                </li>
                <li>
                    <Link to="/profile/kim">개발자2</Link>
                </li>
                <li>
                    <Link to="/profile/park">개발자3</Link>
                </li>
            </ul>
        </div>
    );
};
export default Home;