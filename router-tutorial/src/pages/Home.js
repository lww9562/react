import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <p>반갑습니다</p>
            <Link to="/about">About</Link>
        </div>
    );
};
export default Home;
