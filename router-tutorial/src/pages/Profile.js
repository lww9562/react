import { useParams } from 'react-router-dom';

const data = {
    lee: {
        name: "이이름",
        description:"개발자1",
    },
    kim: {
        name: "김이름",
        description:"개발자2",
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.id];    // /profile/:id
    
    return (
        <div>
            <h1>사용자 정보</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>없는 사용자!</p>
            )}
        </div>
    );
};
export default Profile;